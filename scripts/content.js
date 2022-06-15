chrome.runtime.onMessage.addListenner(function (request, sender, sendResponse) {
    if (request.odoo == "debug") {
        alert("good job");
    }
});