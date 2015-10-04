
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {

      setTimeout(function(){chrome.tabs.create({"url": request.url})},1000);
    }
  }
);
