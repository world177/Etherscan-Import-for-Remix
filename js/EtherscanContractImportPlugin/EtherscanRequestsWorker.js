
EtherscanRequestsWorker.state = {};

EtherscanRequestsWorker.state.WAITING_FOR_TASK = 0;
EtherscanRequestsWorker.state.RUNNING_TASK = 1;
EtherscanRequestsWorker.state.RUNNING_BUT_SLEEPING = 1 << 3;

function EtherscanRequestsWorker(remixPluginClient, followProxies) {

	this.requestsQueue = [];
	this.remixPluginClient = remixPluginClient;
	this.state = 0;
	this.sleepTimeBetweenWebRequests = 5100;
	this.followProxies = followProxies;
	
	this.UIUpdatesCallback = (dataForCallbackUpdates) => {};
	
	this.setUICallback = function(UICallback) {
	
		this.UIUpdatesCallback = UICallback;
	
	}
	
	this.hasQueueJobs = function() {
	
		return this.requestsQueue.length > 0;
	
	}
	
	this.updateState = function(newState) {
	
		this.state = newState;
		this.UIUpdatesCallback(this);
	
	}
	
	this.runQueueJobs = async function() {
	
		this.updateState(EtherscanRequestsWorker.state.RUNNING_TASK);
		
		while(this.requestsQueue.length > 0) {
		
			let currentRequest = this.requestsQueue.pop();
			
			currentRequest.attemptsMade++;

			let requestSuccess = false;
			let saveSuccess = false;

			let lastSavedException = null;

			try { 

				requestSuccess = await currentRequest.contractRequest.runRequest() == ContractRequest.REQUEST_SUCCESSFUL;

			} catch(e) {

				lastSavedException = e;

			}

			try { 

				saveSuccess = requestSuccess ? await currentRequest.contractRequest.saveSourcesToRemixClient(this.remixPluginClient, currentRequest.saveLocation) : false;

			} catch(e) {

				lastSavedException = e;

			}

			if(!(requestSuccess && saveSuccess)) {

				// add it back to the queue if the attempts aren't exhausted.
				if(currentRequest.attemptsMade < currentRequest.attemptLimit) {
				
					this.requestsQueue.push(currentRequest);
				
				} else {

					currentRequest.contractRequest.setState(ContractRequest.NOTIFIED_COMPLETE_FAILURE);
				
				}

			} 

			if(requestSuccess && saveSuccess) {

				if(currentRequest.contractRequest.isProxy() && this.followProxies) {
				
					let implRequest = new ContractRequest(currentRequest.contractRequest.getImplementationAddressForProxy());
					
					// taking the callback function for ui updates from the first. (it's fine if it doesn't have one)
					implRequest.setUICallback(currentRequest.contractRequest.UIUpdatesCallback);
					
					this.addRequest(implRequest, currentRequest.saveLocation, currentRequest.attemptLimit);
				
				}

				currentRequest.contractRequest.setState(ContractRequest.NOTIFIED_COMPLETE_SUCCESS);

			}
			
			
			this.updateState(EtherscanRequestsWorker.state.RUNNING_BUT_SLEEPING);
			await sleep(this.sleepTimeBetweenWebRequests);
			this.updateState(EtherscanRequestsWorker.state.RUNNING_TASK);
			
		}
		
		this.updateState(EtherscanRequestsWorker.state.WAITING_FOR_TASK);
	
	}
	
	this.mainLoop = async function() {
	
		while(true) {
		
			if(this.hasQueueJobs()) {
			
				await this.runQueueJobs();
			
			}
		
			await sleep(200);
		
		}
	
	}
	
	this.start = function() {
	
		return this.mainLoop();
	
	}
	
	this.addRequest = async function(contractRequestObj, saveLocation, attemptLimit) {
	
		let job = {};
		
		job.attemptLimit = attemptLimit;
		job.saveLocation = saveLocation;
		job.contractRequest = contractRequestObj;
		job.attemptsMade = 0;
		
		this.requestsQueue.push(job);
	
	}


}