chrome.contextMenus.create({
    "type": "normal",
    "title": "使用 Google 翻译...",
    "contexts": ["selection"],
    "id": "translate",
    "onclick": translate
});

function translate(info, tab) {
    var url = "https://translate.google.com/?hl=en#en/zh-CN/" + info.selectionText;
    window.open(url, "_blank");
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    chrome.contextMenus.update("translate", {
        "title": "使用 Google 翻译'" + message + "'..."
    });
});