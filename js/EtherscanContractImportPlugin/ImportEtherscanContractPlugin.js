ImportEtherscanContractPlugin.networks = {};

ImportEtherscanContractPlugin.networks.ETHEREUM_MAINNET = 0;

function ImportEtherscanContractPlugin(remixClient, defaultNetwork, defaultAPIKey, defaultStorageLocation, defaultRetryAttempts, workerUICallback) {

	this.network = defaultNetwork;
	this.APIKey = defaultAPIKey;
	this.storageLocation = defaultStorageLocation;
	this.retryAttempts = defaultRetryAttempts;
	this.workerUICallback = workerUICallback;
	
	if(this.workerUICallback == null) 
		this.workerUICallback = () => {};
	
	this.worker = new EtherscanRequestsWorker(client, true);
	
	this.addNewRequest = function(requestAddress, callbackForUI) {
	
		this.addNewRequestWithoutDefaults(requestAddress, this.storageLocation, this.retryAttempts, callbackForUI);
	
	}
	
	// this is for internal requests and requests made outside of the UI that want to override the default settings. 
	this.addNewRequestWithoutDefaults = function(requestAddress, storageLocation, retryAttempts, callbackForUI) {
	
		if(callbackForUI == null) {
		
			callbackForUI = () => {};
		
		}
	
		let contractToRequest = new ContractRequest(requestAddress);
		
		contractToRequest.setUICallback(callbackForUI);
	
		this.worker.addRequest(contractToRequest, storageLocation, retryAttempts);
	
	}
	
	this.worker.setUICallback(this.workerUICallback);
	this.worker.start();

	return this;

}