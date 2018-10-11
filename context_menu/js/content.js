window.onmouseup = function () {
    var selectionText = window.getSelection();
    if (selectionText.anchorOffset != selectionText.extentOffset) {
        chrome.runtime.sendMessage(selectionText.toString());
    }
};