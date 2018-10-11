chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == '你好'){
        sendResponse('可吃早饭吗');
    }
});