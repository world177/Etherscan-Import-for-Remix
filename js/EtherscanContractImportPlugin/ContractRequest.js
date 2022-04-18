ContractRequest.REQUEST_NOT_ATTEMPTED = 0 << 0;
ContractRequest.REQUEST_RUNNING = 1 << 0;
ContractRequest.REQUEST_SUCCESSFUL = 1 << 1;
ContractRequest.REQUEST_FAILED = 1 << 2;
ContractRequest.LAST_SAVE_SUCCESSFUL = 1 << 3;
ContractRequest.NOTIFIED_COMPLETE_SUCCESS = 1 << 4;
ContractRequest.NOTIFIED_COMPLETE_FAILURE = 1 << 5;

ContractRequest.NETWORKS = [["etherscan","https://api.etherscan.io/api"],["ropsten.etherscan","https://api-ropsten.etherscan.io/api"],["rinkeby.etherscan","https://api-rinkeby.etherscan.io/api"],["goerli.etherscan","https://api-goerli.etherscan.io/api"],["kovan.etherscan","https://api-kovan.etherscan.io/api"],["bscscan","https://api.bscscan.com/api"],["testnet.bscscan","https://api-testnet.bscscan.com/api"],["hecoinfo","https://api.hecoinfo.com/api"],["testnet.hecoinfo","https://api-testnet.hecoinfo.com/api"],["ftmscan","https://api.ftmscan.com/api"],["testnet.ftmscan","https://api-testnet.ftmscan.com/api"],["optimistic.etherscan","https://api-optimistic.etherscan.io/api"],["kovan-optimistic.etherscan","https://api-kovan-optimistic.etherscan.io/api"],["polygonscan","https://api.polygonscan.com/api"],["testnet.polygonscan","https://api-testnet.polygonscan.com/api"],["arbiscan","https://api.arbiscan.io/api"],["testnet.arbiscan","https://api-testnet.arbiscan.io/api"],["snowtrace","https://api.snowtrace.io/api"],["testnet.snowtrace","https://api-testnet.snowtrace.io/api"]];

// The following two addresses have different structures in return results.

// 0x66017d22b0f8556afdd19fc67041899eb65a21bb
// 0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413
ContractRequest.requestForContractFromEtherscan = function(contractRequestObject) {

	let contractAddress = contractRequestObject.address;
	let apiKey = contractRequestObject.apiKey;
	let network = contractRequestObject.network;
	
	let returnResult = {};
	
	returnResult.failedWebRequest = false;
	returnResult.webRequestResult = "";

	return new Promise(function(resolve, reject) {
	
		try {

			//let address = new URL("https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + contractAddress + "&apikey=" + apiKey); 
			let address = new URL(String(ContractRequest.NETWORKS[network][1]) + "?module=contract&action=getsourcecode&address=" + contractAddress + "&apikey=" + apiKey); 
	
			let xmlHttp = new XMLHttpRequest();
			
			xmlHttp.onreadystatechange = function() { 
			
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					
					returnResult.failedWebRequest = false;
					returnResult.webRequestResult = xmlHttp.responseText;
					
					
					resolve(returnResult);
					
				} else if(xmlHttp.readyState == 4) {
					
					returnResult.failedWebRequest = true;
					returnResult.webRequestResult = "Received a web status code that was not 200. Code: " + String(xmlHttp.status);
					
					resolve(returnResult);
					
				}
					
			}
			
			xmlHttp.addEventListener('error', function(event) {
				
				returnResult.failedWebRequest = true;
				returnResult.webRequestResult = JSON.stringify(event);
				
				resolve(returnResult);
				
			});
			
			xmlHttp.open("GET", address, true); 
			xmlHttp.send(null);
			
		} catch(e) {
			
			returnResult.failedWebRequest = true;
			returnResult.webRequestResult = e;
			
			resolve(returnResult);
		
		}
	
	
	});

}

// api key can be undefined
function ContractRequest(address, network, apiKey) {
	
	this.state = ContractRequest.REQUEST_NOT_ATTEMPTED;
	this.address = address;
	this.lastAPIResult = "";
	this.customStateText = "";
	this.network = Number(network);

	this.apiKey = "";

	if(apiKey != null)
		this.apiKey = String(apiKey);

	this.saveFailures = [];
	this.requestFailures = [];
	
	this.lastParsedResult = {};
	this.contractData = {};

	// i didn't want to set the storage location on creation, because someone might want to make a 
	// request + save then save again somewhere else. these are just strings with the location of successful saves
	this.storedAtLocations = [];

	
	// if someone pulls the contract again after modifying a pulled contract,
	// it will overwrite their work. saving a time is unique enough to prevent
	// this from happening, and is also useful when looking directly at contract addresses
	this.time = new Date().getTime();
	
	
	this.UIUpdatesCallback = (dataForCallbackUpdates) => {};
	
	this.setUICallback = function(UICallback) {
	
		this.UIUpdatesCallback = UICallback;

		this.UIUpdatesCallback(this);
	
	}
	
	this.failSave = function(reason) {

		this.saveFailures.push(reason);
		this.setState((~ContractRequest.LAST_SAVE_SUCCESSFUL >>> 0) & this.state);

		return false;

	}

	this.failRequest = function(reason) {

		this.setState(ContractRequest.REQUEST_FAILED);
		this.requestFailures.push(reason);

		return this.state;

	}

	this.saveSourcesToRemixClient = async function(remixClient, storeLocation) {


		let dateString = String(new Date(Number(this.time)).toLocaleString()).replaceAll(":", "_").replaceAll("/", "-").replaceAll(",", "");

		// in the future, i might add the ability to customize this. 
		//
		// the current format is { unixTime } / { formattedLocaleTime } / { address } 
		// 
		// the argument for this format is below
		//
		// 	leading with the initiated DateTime unix time
		//		- helps with confusion related to address sort - "i remember requesting this one before that one, 
		//			but don't remember what address that was"
		//  	- automatically orders all saved contracts in this folder with a unique natural ID. this saves
		//			someone who modifies a contract from accidentally writing over it if they request
		//			a new version for comparison. 
		//		- it forces a correct sort by creation date
		//
		//	followed by the actual formatted date
		//		- it makes the order immediately obvious, and is helpful when it's been a while since reviewing a contract
		//		- it prevents someone from confusing where the requested contract will be stored. ex. if they perceived
		// 			the unix time as an id, the order might appear { id } / { address } / { time }. so they might believe
		//			that future requests could end up with a different time under the address, which wouldn't be so bad,
		//			however, i didn't want to do the small amount of work to make this reality when i like the this format more
		//	
		// 	and finally, followed by the address
		//	- the address is important (to include) as the reason the contract was pulled is very likely related to activity
		//		at the address. having it above the level of the contract in my opinion makes it easier to see
		//  

		let plannedStoreLocation = storeLocation + "/" + this.time + "/" + dateString + "/" + this.address;
	
		let sources = {};
		
		if((this.state & ContractRequest.REQUEST_SUCCESSFUL) == ContractRequest.REQUEST_SUCCESSFUL) {
		
			sources = this.contractData.SourceCode;
		
		} else {
		
			this.failSave("Attempted to save before requesting contract from Etherscan.");

			throw "Error: Contract request is not complete!";
		
		}
		
		let filesInContract = []; 
		let success = true;

		try {

			sources = sources.sources;
			filesInContract = Object.keys(sources);

		} catch(e) {

			return this.failSave("Unexpected parsed format. (1): " + e);

		}

		try {
		
			for(let i = 0; i < filesInContract.length && success; i++) {

				let fileName = "";
				let sourceFileContent = "";

				try {

					fileName = filesInContract[i]
					sourceFileContent = sources[filesInContract[i]].content;

				} catch(e) {

					return this.failSave("Unexpected parsed format. (2): " + e);

				}
			
				success = success & await client.fileManager.writeFile(plannedStoreLocation + "/" + fileName, sourceFileContent);
			
			}

		} catch(e) {

			return this.failSave(e);

		}
		
		if(success) {

			this.storedAtLocations.push(plannedStoreLocation);

			this.setState(ContractRequest.LAST_SAVE_SUCCESSFUL | this.state);

		} else {

			return this.failSave("Remix didn't provide a reason for failing to save.");

		}
		
		return success;
	
	}

	this.setState = function(newState) {

		this.state = newState;

		this.UIUpdatesCallback(this);

	}
	



	
	this.runRequest = async function() {
		
		try {
	
			this.setState(ContractRequest.REQUEST_RUNNING);
			
			this.lastAPIResult = await ContractRequest.requestForContractFromEtherscan(this);
			
			if(this.lastAPIResult.failedWebRequest) {
			
				return this.failRequest("Web request failed: " + this.lastAPIResult.webRequestResult);
			
			} else {
			
				try {

					this.lastParsedResult = JSON.parse(this.lastAPIResult.webRequestResult);
					
					if(this.lastParsedResult.status == 1) {
					
						this.contractData = this.lastParsedResult.result[0];
						
						// fix source code format. 
						//
						// if it starts with two brackets, there are multiple source code files
						if(this.contractData.SourceCode[0] == "{" && this.contractData.SourceCode[1] == "{") {
						
							this.contractData.SourceCode = JSON.parse(this.contractData.SourceCode.substring(1, this.contractData.SourceCode.length - 1));
						
						// actual JSON. this just makes the format exactly the same as if it had multiple sources.
						} else if(this.contractData.SourceCode[0] == "{") {

							let temp = this.contractData.SourceCode;

							this.contractData.SourceCode = {};
							this.contractData.SourceCode.sources = JSON.parse(temp);

						// only one source code file. this just makes the format exactly the same as if it had multiple sources.
						} else {
							
							let temp = {};
						
							temp.sources = {};
							
							let tempSourceObj = {};
							tempSourceObj.content = this.contractData.SourceCode;

							let ext = ".sol"

							if(this.contractData.CompilerVersion.startsWith("vyper:")) {

								ext = ".vy";

							}
							
							temp.sources[this.contractData.ContractName + ext] = tempSourceObj;
						
							this.contractData.SourceCode = temp;
						
						}
						
						// fix abi format
						this.contractData.ABI = JSON.parse(this.contractData.ABI);
					
						this.setState(ContractRequest.REQUEST_SUCCESSFUL);
					
					} else {
					
						return this.failRequest("Contract doesn't exist or API limitation: " + String(JSON.stringify(this.lastAPIResult)));
					
					}

				} catch(e) {

					return this.failRequest("Parse error: " + e);

				}
			
			}
			
		} catch(e) {
			
			return this.failRequest("Unexpected Error: " + e);
		
		}
		
		return this.state;
	
	}
	
	this.getSource = function() {
		
		let source = {};
		
		if((this.state & ContractRequest.REQUEST_SUCCESSFUL) == ContractRequest.REQUEST_SUCCESSFUL) {
		
			source = this.contractData.SourceCode;
		
		} else {
		
			throw "Error: Contract request is not complete!";
		
		}
		
		return source;
	
	}
	
	this.isProxy = function() {
		
		let isProxy = false;
		
		if((this.state & ContractRequest.REQUEST_SUCCESSFUL) == ContractRequest.REQUEST_SUCCESSFUL) {
		
			isProxy = this.contractData.Proxy != 0;
		
		} else {
		
			throw "Error: Contract request is not complete!";
		
		}
		
		return isProxy;
	
	}
	
	this.getImplementationAddressForProxy = function() {
		
		let impl = "";
		
		if((this.state & ContractRequest.REQUEST_SUCCESSFUL) == ContractRequest.REQUEST_SUCCESSFUL) {
		
			if(this.isProxy()) {
			
				impl = this.contractData.Implementation;
			
			} else {
			
				throw "Error: Contract is not a proxy contract.";
			
			}
		
		} else {
		
			throw "Error: Contract request is not complete!";
		
		}
		
		return impl;
	
	}

	
	this.getABI = function() {
		
		let ABI = {};
		
		if((this.state & ContractRequest.REQUEST_SUCCESSFUL) == ContractRequest.REQUEST_SUCCESSFUL) {
		
			ABI = this.contractData.ABI;
		
		} else {
		
			throw "Error: Contract request is not complete!";
		
		}
		
		return ABI;
	
	}
	

	this.getStatusDescription = function() {
	
		let description = "";
	
		switch(this.state) {
		
			case ContractRequest.REQUEST_NOT_ATTEMPTED:
				description = "Not yet started";
				break;
				
			case ContractRequest.REQUEST_RUNNING:
				description = "Requesting (still processing)";
				break;
				
			case ContractRequest.REQUEST_SUCCESSFUL:
				description = "Retrieved (attempting to save)";
				break;

			case ContractRequest.REQUEST_SUCCESSFUL | ContractRequest.LAST_SAVE_SUCCESSFUL:
				description = "Saved (still processing)";
				break;	

			case ContractRequest.REQUEST_FAILED:
				description = "Failed (still retrying)";
				break;

			case ContractRequest.NOTIFIED_COMPLETE_FAILURE:
				description = "Failed";
				break;

			case ContractRequest.NOTIFIED_COMPLETE_SUCCESS:
				description = "Complete";
				break;
		
		}
	
		return description;
	
	}

	return this;

}