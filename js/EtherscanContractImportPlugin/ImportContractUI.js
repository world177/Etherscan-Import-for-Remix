let ImportContractUI = {}
			
ImportContractUI.addNewRequest = async function() {

	let inputVal = ImportContractUI.import.contractAddress.e().value;

	// replace spaces, and split by comma (for multiple addresses at once)
	inputVal = inputVal.replaceAll(" ", "").split(",");

	for(requestedContract of inputVal) {

		ImportContractUI.plugin.addNewRequest(requestedContract, ImportContractUI.requestedImport.requestContractUIUpdatesCallback);

		// this is somewhat of a hack to guarantee none accidentally end up in the same folder
		// id is something like { unix_timestamp } / { date } / { address }
		// (sleep for 1 millisecond)
		await sleep(1);

	}

}


ImportContractUI.requestedImport = {};

ImportContractUI.requestedImport.htmlInjectionLocation = new HTMLElement("accordionExample");

// not actually going to use this function
ImportContractUI.requestedImport.injectIntoInjectionLocation = function(inject) {

	let current = ImportContractUI.requestedImport.htmlInjectionLocation.e().innerHTML;

	ImportContractUI.requestedImport.htmlInjectionLocation.e().innerHTML = inject + current;

}

ImportContractUI.requestedImport.issuedUI = {};

ImportContractUI.requestedImport.requestContractUIUpdatesCallback = function(data) {

	if(ImportContractUI.requestedImport.issuedUI[data.address + String(data.time)] == null) {
	
		let newElementID = "importState" + String(Object.keys(ImportContractUI.requestedImport.issuedUI).length);
		
		ImportContractUI.requestedImport.issuedUI[data.address + String(data.time)] = new HTMLElement(newElementID);
		
		let injectLocation = ImportContractUI.requestedImport.htmlInjectionLocation.e();

		let injectionTemplate = `<div class="card border border-1 mb-1" id="` + newElementID + `">
									<div class="card-header mb-0" id="` + newElementID +  "heading" + `">
									  <div class="mb-0">
										<button class="btn btn-link btn-sm btn-block text-truncate collapsed" id="` + newElementID +  "buttonHeading" + `" type="button" data-toggle="collapse" data-target="#` + newElementID +  "collapse" + `" aria-expanded="false" aria-controls="` + newElementID +  "collapse" + `">
											` + data.address + `
										</button>
									  </div>
									</div>

									<div id="` + newElementID +  "collapse" + `" class="collapse" aria-labelledby="` + newElementID +  "heading" + `" data-parent="#accordionExample" style="">
										<div class="card-body">

										  	<span id="` + newElementID + "alertInsert" + `"></span>

										  	<div class="row mb-3">
										  		<div class="col-sm-12">
										  			<h6>
										  				Contract
										  			</h6>
										  			<small id="` + newElementID +  "addressC" + `">
										  				0x9814542f4230ab166efef3363a2d85e20d8708c7
										  			</small>
										  		</div>
										  	</div>

											<div class="row mb-0" id="` + newElementID +  "marginChange" + `">
												<div class="col-sm-12">
													<h6>
														Status
													</h6>
													<small id="` + newElementID +  "status" + `">
														Not yet requested
													</small>
												</div>
											</div>

											<span id="` + newElementID +  "storageInject" + `">



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

	heading.innerHTML = data.address;
	status.innerHTML = data.getStatusDescription();

	if(data.storedAtLocations.length > 0) {

		let storageInjection = `	<div class="row">
										<div class="col-sm-12">
											<h6 class="mb-3">
												Storage Location
											</h6>
											<small>  
												<div class="col-sm-12 mb-0 bg-dark pt-2 pb-2 border border-1 rounded" id="` + current.elementID +  "storage" + `">
													/etherscan/current_job/0x9814542f4230ab166efef3363a2d85e20d8708c7
												</div>
											</small>
										</div>
									</div>`;

		marginChange.classList = "row mb-3";
		storageInject.innerHTML = storageInjection;

		let storage = document.getElementById(current.elementID + "storage");

		storage.innerHTML = data.storedAtLocations.length > 1 ? JSON.stringify(data.storedAtLocations) : data.storedAtLocations[0];
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

		let alertInsertInjection = `<div class="alert alert-`+ alertType +`" role="alert">
										  <small>`+ alertMessage +`</small>
									</div>`


		alertInsert.innerHTML = alertInsertInjection;


	}

	card.classList = defaultCardClasslist + " " + cardClasslistAddition;

	addressC.innerHTML = data.address;


}




ImportContractUI.import = {};

ImportContractUI.import.contractAddress = new HTMLElement("importContractAddress");
ImportContractUI.import.importTab = new HTMLElement("importContractImportTab");
ImportContractUI.import.settingsTab = new HTMLElement("importContractSettingsTab");
ImportContractUI.import.cardBodyContent = new HTMLElement("importContractCardBodyContent");

ImportContractUI.import.contractAPIKey =  new HTMLElement("importContractApiKey");
ImportContractUI.import.contractStorageLocation = new HTMLElement("importContractStorageLocation");
ImportContractUI.import.contractRetryAttempts = new HTMLElement("importContractRetryAttempts");


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

						<select class="form-control" id="importContractSelectNetwork" disabled>     

							<option>
								Ethereum Mainnet
							</option>      
							<option>
								2
							</option>      
							<option>
								3
							</option>      
							<option>
								4
							</option>      
							<option>
								5
							</option>    

						</select>  

					</div>  

					<div class="form-group">    

						<label for="importContractAddress">
							Contract Address
						</label>    

						<input type="text" class="form-control" id="importContractAddress" placeholder="0x....." maxlength="100000000" onkeydown="if(event.keyCode == 13){ ImportContractUI.addNewRequest(); }">  

					</div>    


					<button type="submit" class="btn btn-primary btn-block btn-sm" onclick="ImportContractUI.addNewRequest()">
						Request
					</button>`;
	
	
	
	
	
	
	let inject2 = `<div class="form-group">    

						<label for="importContractApiKey">
							Etherscan API Key
						</label>    
						<input type="text" class="form-control" id="importContractApiKey" placeholder="Optional: Etherscan API Key">  

					</div>      

					<div class="form-group">    
						<label for="importContractStorageLocation">Storage Location</label>    
						<input type="text" class="form-control" id="importContractStorageLocation" placeholder="/etherscan/contracts" value="/etherscan/contracts">  
					</div>        

					<div class="form-group">    
						<label for="importContractRetryAttempts">Retry Attempts on Failure</label>    
						<input type="text" class="form-control" id="importContractRetryAttempts" placeholder="3" value="3">  
					</div>`


	let injections = [inject1, inject2]
	
	for(let i = 0; i < tabs.length; i++) {
	
		tabs[i].e().classList.value = inactiveTabClasses;
	
	}
	
	tabs[tabID].e().classList.value = activeTabClasses;
	
	ImportContractUI.import.cardBodyContent.e().innerHTML = injections[tabID];

}