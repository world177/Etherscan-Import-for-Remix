function ImportEtherscanContractPlugin(remixClient, defaultAPIKey, defaultStorageLocation, defaultRetryAttempts, waitBetweenRequests, workerUICallback) {

	this.APIKey = defaultAPIKey;
	this.storageLocation = defaultStorageLocation;
	this.retryAttempts = Number(defaultRetryAttempts);
	this.workerUICallback = workerUICallback;
	this.waitBetweenRequests = waitBetweenRequests;

	if(!isNumber(this.retryAttempts)) {

		this.retryAttempts = 3;

	}
	
	if(this.workerUICallback == null) 
		this.workerUICallback = () => {};
	

	this.setAPIKey = function(newAPIKey) {

		this.APIKey = newAPIKey;

	}

	this.worker = new EtherscanRequestsWorker(client, true);
	
	this.addNewRequest = function(requestAddress, network, callbackForUI) {
	
		this.addNewRequestWithoutDefaults(requestAddress, network, this.storageLocation, this.retryAttempts, this.APIKey, callbackForUI);
	
	}
	
	// this is for internal requests and requests made outside of the UI that want to override the default settings. 
	this.addNewRequestWithoutDefaults = function(requestAddress, network, storageLocation, retryAttempts, apiKey, callbackForUI) {
	
		if(callbackForUI == null) {
		
			callbackForUI = () => {};
		
		}

		if(apiKey == null) {

			apiKey = this.APIKey;

		}
	
		let contractToRequest = new ContractRequest(requestAddress, network, apiKey);
		
		contractToRequest.setUICallback(callbackForUI);
	
		this.worker.addRequest(contractToRequest, storageLocation, retryAttempts);
	
	}

	this.setTimeToWaitBetweenRequests = function(newTimeMs) {

		if(!isNumber(newTimeMs) || newTimeMs > 5000) {

			newTimeMs = 5000;

		}

		this.waitBetweenRequests = newTimeMs;
		this.worker.sleepTimeBetweenWebRequests = this.waitBetweenRequests;

	}
	
	this.worker.setUICallback(this.workerUICallback);
	this.setTimeToWaitBetweenRequests(this.waitBetweenRequests);

	this.worker.start();

	return this;

}