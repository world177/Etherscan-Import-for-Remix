ImportEtherscanContractPlugin.networks = {};

ImportEtherscanContractPlugin.networks.ETHEREUM_MAINNET = 0;

function ImportEtherscanContractPlugin(remixClient, defaultNetwork, defaultAPIKey, defaultStorageLocation, defaultRetryAttempts, waitBetweenRequests, workerUICallback) {

	this.network = defaultNetwork;
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
	
	this.addNewRequest = function(requestAddress, callbackForUI) {
	
		this.addNewRequestWithoutDefaults(requestAddress, this.storageLocation, this.retryAttempts, this.APIKey, callbackForUI);
	
	}
	
	// this is for internal requests and requests made outside of the UI that want to override the default settings. 
	this.addNewRequestWithoutDefaults = function(requestAddress, storageLocation, retryAttempts, apiKey, callbackForUI) {
	
		if(callbackForUI == null) {
		
			callbackForUI = () => {};
		
		}

		if(apiKey == null) {

			apiKey = this.APIKey;

		}
	
		let contractToRequest = new ContractRequest(requestAddress, apiKey);
		
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