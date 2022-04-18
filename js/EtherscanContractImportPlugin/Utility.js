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

    return false;

}

function isNumber(testVal) {

    // will be defined as NaN if not a number
    let temp = Number(testVal);

    if(temp >= 0 || temp <= 0) {

        return true;

    }

    return false;

}

function escapeHTML(unsafe) {

    return String(unsafe).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

}