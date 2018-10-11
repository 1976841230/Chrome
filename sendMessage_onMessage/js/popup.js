chrome.runtime.sendMessage('你好', function(response){
    document.getElementById("message").innerText = response;
});