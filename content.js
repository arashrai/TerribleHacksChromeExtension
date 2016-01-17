var links = $("a[href^='http']");

var firstHref = links.eq(Math.floor(Math.random()*links.length)).attr("href");

var stuff = $('body').html()

if(stuff.indexOf('(Given Word))') == -1){
chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});}

setTimeout(function(){chrome.tabs.create({"url": request.url})},3242389492200);
