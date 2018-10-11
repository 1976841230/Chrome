function changeIcon(index) {
    index = index % 20;
    chrome.browserAction.setIcon({path: {'19': 'images/icon19_' + index + ".png"}});
    chrome.browserAction.setIcon({path: {'38': 'images/icon38_' + index + ".png"}});
    setTimeout(function () {
        changeIcon(index + 1)
    }, 50);
}

changeIcon(0);