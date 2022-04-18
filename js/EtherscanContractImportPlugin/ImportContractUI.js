let ImportContractUI = {}
			


ImportContractUI.addNewRequest = async function() {

	if(ImportContractUI.requestedImport.headerInjectLocation.e().innerHTML.length == 0) {

		ImportContractUI.requestedImport.headerInjectLocation.e().innerHTML = `<h6 class="mb-3 ml-1 mt-1">Contracts for Import</h6>`;

	}

	let inputVal = ImportContractUI.import.contractAddress.e().value;
	let network = ImportContractUI.import.contractSelectNetwork.e().selectedIndex;

	// replace spaces, and split by comma (for multiple addresses at once)
	inputVal = inputVal.replaceAll(" ", "").split(",");

	for(requestedContract of inputVal) {

		ImportContractUI.plugin.addNewRequest(requestedContract, network, ImportContractUI.requestedImport.requestContractUIUpdatesCallback);

		// this is somewhat of a hack to guarantee none accidentally end up in the same folder
		// id is something like { unix_timestamp } / { date } / { address }
		// (sleep for 1 millisecond)
		await sleep(1);

	}

}

ImportContractUI.requestedImport = {};

ImportContractUI.requestedImport.headerInjectLocation = new HTMLElement("injectAfterFirstRequest");
ImportContractUI.requestedImport.htmlInjectionLocation = new HTMLElement("accordionExample");

ImportContractUI.requestedImport.issuedUI = {};

ImportContractUI.requestedImport.requestContractUIUpdatesCallback = function(data) {

	if(ImportContractUI.requestedImport.issuedUI[data.address + String(data.time)] == null) {
	
		let newElementID = "importState" + String(Object.keys(ImportContractUI.requestedImport.issuedUI).length);
		
		ImportContractUI.requestedImport.issuedUI[data.address + String(data.time)] = new HTMLElement(newElementID);
		
		let injectLocation = ImportContractUI.requestedImport.htmlInjectionLocation.e();

		let injectionTemplate = `<div class="card border border-1 mb-1" id="` + escapeHTML(newElementID) + `">
									<div class="card-header mb-0" id="` + escapeHTML(newElementID) +  "heading" + `">
									  <div class="mb-0">
										<button class="btn btn-link btn-sm btn-block text-truncate collapsed" id="` + escapeHTML(newElementID) +  "buttonHeading" + `" type="button" data-toggle="collapse" data-target="#` + escapeHTML(newElementID) +  "collapse" + `" aria-expanded="false" aria-controls="` + escapeHTML(newElementID) +  "collapse" + `">
											` + escapeHTML(data.address) + `
										</button>
									  </div>
									</div>

									<div id="` + escapeHTML(newElementID) +  "collapse" + `" class="collapse" aria-labelledby="` + escapeHTML(newElementID) +  "heading" + `" data-parent="#accordionExample" style="">
										<div class="card-body">

										  	<span id="` + escapeHTML(newElementID) + "alertInsert" + `"></span>

										  	<div class="row mb-3">
										  		<div class="col-sm-12">
										  			<h6>
										  				Contract
										  			</h6>
										  			<small id="` + escapeHTML(newElementID) +  "addressC" + `">
										  				0x9814542f4230ab166efef3363a2d85e20d8708c7
										  			</small>
										  		</div>
										  	</div>

											<div class="row mb-0" id="` + escapeHTML(newElementID) +  "marginChange" + `">
												<div class="col-sm-12">
													<h6>
														Status
													</h6>
													<small id="` + escapeHTML(newElementID) +  "status" + `">
														Not yet requested
													</small>
												</div>
											</div>

											<span id="` + escapeHTML(newElementID) +  "storageInject" + `">



											</span>

										</div>
									</div>
								</div>`; 

		injectLocation.innerHTML = injectionTemplate + injectLocation.innerHTML;
	} 
	
	let current = ImportContractUI.requestedImport.issuedUI[data.address + String(data.time)];
	
	let heading = document.getElementById(current.elementID + "buttonHeading");
	let status = document.getElementById(current.elementID + "status");
	let addressC = document.getElementById(current.elementID + "addressC");
	let alertInsert = document.getElementById(current.elementID + "alertInsert");
	let storageInject = document.getElementById(current.elementID +  "storageInject");
	let marginChange = document.getElementById(current.elementID + "marginChange");
	let card = document.getElementById(current.elementID);

	let defaultCardClasslist = "card border border-1 mb-1"
	let cardClasslistAddition = "";

	if(data.state != ContractRequest.REQUEST_NOT_ATTEMPTED) {

		cardClasslistAddition = "border-warning";

	}

	heading.innerHTML = escapeHTML(data.address);
	status.innerHTML = escapeHTML(data.getStatusDescription());

	if(data.storedAtLocations.length > 0) {

		let storageInjection = `	<div class="row">
										<div class="col-sm-12">
											<h6 class="mb-3">
												Storage Location
											</h6>
											<small>  
												<div class="col-sm-12 mb-0 bg-dark pt-2 pb-2 border border-1 rounded" id="` + escapeHTML(current.elementID) +  "storage" + `">
													/etherscan/current_job/0x9814542f4230ab166efef3363a2d85e20d8708c7
												</div>
											</small>
										</div>
									</div>`;

		marginChange.classList = "row mb-3";
		storageInject.innerHTML = storageInjection;

		let storage = document.getElementById(current.elementID + "storage");

		storage.innerHTML = data.storedAtLocations.length > 1 ? escapeHTML(JSON.stringify(data.storedAtLocations)) : escapeHTML(data.storedAtLocations[0]);
	}

	let shouldInsertAlert = data.state == ContractRequest.NOTIFIED_COMPLETE_FAILURE || data.state == ContractRequest.NOTIFIED_COMPLETE_SUCCESS;
	let isStateFail = data.state == ContractRequest.NOTIFIED_COMPLETE_FAILURE;

	if(shouldInsertAlert) {

		// alert also signals that it is done, so the card border should be changed
		cardClasslistAddition = "border-success"

		let alertType = "success";
		let alertMessage = "This contract was successfully imported!";

		if(isStateFail) {

			cardClasslistAddition = "border-danger"
			alertType = "danger";
			alertMessage = "Failed: " + String(data.saveFailures.length > 0 ? data.saveFailures[data.saveFailures.length - 1] : data.requestFailures[data.requestFailures.length - 1]);

		}

		let alertInsertInjection = `<div class="alert alert-`+ escapeHTML(alertType) +`" role="alert">
										  <small>`+ escapeHTML(alertMessage) +`</small>
									</div>`


		alertInsert.innerHTML = alertInsertInjection;


	}

	card.classList = defaultCardClasslist + " " + cardClasslistAddition;

	addressC.innerHTML = escapeHTML(data.address);


}




ImportContractUI.import = {};

ImportContractUI.import.contractAddress = new HTMLElement("importContractAddress");
ImportContractUI.import.importTab = new HTMLElement("importContractImportTab");
ImportContractUI.import.settingsTab = new HTMLElement("importContractSettingsTab");
ImportContractUI.import.cardBodyContent = new HTMLElement("importContractCardBodyContent");

ImportContractUI.import.contractAPIKey =  new HTMLElement("importContractApiKey");
ImportContractUI.import.contractStorageLocation = new HTMLElement("importContractStorageLocation");
ImportContractUI.import.contractRetryAttempts = new HTMLElement("importContractRetryAttempts");
ImportContractUI.import.contractRequestLimit = new HTMLElement("importContractRequestLimit");
ImportContractUI.import.contractSelectNetwork = new HTMLElement("importContractSelectNetwork");

ImportContractUI.import.contractUpdateSettings = function() {

	let setAPIKey = String(ImportContractUI.import.contractAPIKey.e().value);
	let setStorage = String(ImportContractUI.import.contractStorageLocation.e().value);
	let setRetry = Number(ImportContractUI.import.contractRetryAttempts.e().value);
	let setRequestLimit = Number(ImportContractUI.import.contractRequestLimit.e().value);

	setRetry = isNumber(setRetry) ? setRetry : 3;

	setRequestLimit = isNumber(setRequestLimit) ? setRequestLimit : 0.2;
 	setRequestLimit = setRequestLimit >= 0.2 ? setRequestLimit : 0.2; // prevents from waiting longer than required
	setRequestLimit = (1.0 / setRequestLimit) * 1000.0;

	ImportContractUI.plugin.setAPIKey(setAPIKey);
	ImportContractUI.plugin.storageLocation = setStorage;
	ImportContractUI.plugin.retryAttempts = setRetry;
	ImportContractUI.plugin.setTimeToWaitBetweenRequests(setRequestLimit);

}

ImportContractUI.import.buildNetworkList = function() {

	let returnText = "";

	for(x of ContractRequest.NETWORKS) {

		returnText += "<option>";
		returnText += escapeHTML(String(x[0]));
		returnText += "</option>";

	}

	return returnText;

}

ImportContractUI.import.setActive = function(tabID) {
		
	let activeTabClasses = "nav-link bg-secondary active btn-sm";
	let inactiveTabClasses = "nav-link btn-sm";
	
	let tabs = [ImportContractUI.import.importTab, ImportContractUI.import.settingsTab];
	

	let inject1 = `<p class="mb-2">

						<small>
							Enter the address of a contract on Etherscan to attempt to import it into Remix
						</small>

					</p>      

					<div class="form-group mb-2 mt-0">    

						<label for="importContractSelectNetwork">

							Network

						</label>    

						<select class="form-control" id="importContractSelectNetwork" >     
							`+ ImportContractUI.import.buildNetworkList() + `
						</select>  

					</div>  

					<div class="form-group">    

						<label for="importContractAddress">
							Contract Address
						</label>    

						<input type="text" class="form-control" id="importContractAddress" placeholder="0x....." maxlength="100000000" onkeydown="if(event.keyCode == 13) { ImportContractUI.addNewRequest(); }">  

					</div>    


					<button type="submit" class="btn btn-primary btn-block btn-sm" onclick="ImportContractUI.addNewRequest()">
						Request
					</button>`;
	
	let inject2 = `<div class="form-group">    

						<label for="importContractApiKey">
							Etherscan API Key
						</label>    
						<input type="text" class="form-control" id="importContractApiKey"  oninput="ImportContractUI.import.contractUpdateSettings();" onkeydown="ImportContractUI.import.contractUpdateSettings();" placeholder="Optional: Etherscan API Key" value="">  

					</div>      
					<div class="form-group">    

						<label for="importContractRequestLimit">
							Requests a second
						</label>    
						<input type="text" class="form-control" id="importContractRequestLimit" oninput="ImportContractUI.import.contractUpdateSettings();" onkeydown="ImportContractUI.import.contractUpdateSettings();"  placeholder="Required: API Key" value="0.2">  

					</div>

					<div class="form-group">    
						<label for="importContractStorageLocation">Storage Location</label>    
						<input type="text" class="form-control" id="importContractStorageLocation" oninput="ImportContractUI.import.contractUpdateSettings();" onkeydown="ImportContractUI.import.contractUpdateSettings();"  placeholder="/etherscan/contracts" value="/etherscan/contracts">  
					</div>        

					<div class="form-group">    
						<label for="importContractRetryAttempts">Attempts before Failure</label>    
						<input type="text" class="form-control" id="importContractRetryAttempts" oninput="ImportContractUI.import.contractUpdateSettings();" onkeydown="ImportContractUI.import.contractUpdateSettings();"  placeholder="3" value="3">  
					</div>`


	let injections = [inject1, inject2]
	
	for(let i = 0; i < tabs.length; i++) {
	
		tabs[i].e().classList.value = inactiveTabClasses;
	
	}
	
	tabs[tabID].e().classList.value = activeTabClasses;

	ImportContractUI.import.cardBodyContent.e().innerHTML = injections[tabID];

	if(tabID == 1) {

		ImportContractUI.import.contractAPIKey.e().value = ImportContractUI.plugin.APIKey;
		ImportContractUI.import.contractRequestLimit.e().value = (1.0 / (ImportContractUI.plugin.waitBetweenRequests / 1000.0));
		ImportContractUI.import.contractStorageLocation.e().value = ImportContractUI.plugin.storageLocation;
		ImportContractUI.import.contractRetryAttempts.e().value = ImportContractUI.plugin.retryAttempts;

	}


}