function sleep(ms) {

	return new Promise(resolve => setTimeout(resolve, ms));

}

// a function to check if the page is in an iFrame
//
// https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
function inIframe () {

    try {

        return window.self !== window.top;

    } catch (e) {

        return true;

    }

}