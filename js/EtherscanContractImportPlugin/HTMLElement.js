function HTMLElement(elementID) {

	this.elementID = elementID;
	
	this.e = function() {
	
		return document.getElementById(this.elementID);
	
	}
	
	this.setOnUpdate = function(callback) {
	
		return this;
	
	}


	return this;

}