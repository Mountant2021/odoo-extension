$(document).ready(function () {
    $("#debug").click(debugMode);
});

function debugMode() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { odoo: "debug" }, function (response) {
            $("#debug").remove();
        });
    });
}