
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        
         promiseCount = returnCount(request.searchtext);

         promiseCount.then(function (value) {
          
             console.log(value.length);
             if (request.action === "find")
                 sendResponse({ count: value.length });

             if (request.action === "delete") {
                 deleteHistory(value);
                 sendResponse({ term: request.searchtext });
             }
             return true;
         });
     
         return true;
    
  });


function returnCount(searchText)
{
    var promise1 = new Promise(function(resolve, reject) {
            chrome.history.search({ 'text': searchText, 'startTime': 0 }, function (resultarray) {
                resolve(resultarray);
            });
    });

    return promise1;
}

function deleteHistory(resultarray)
{
    for (var item in resultarray) {
        chrome.history.deleteUrl({ "url": resultarray[item].url }, function (resultarray) {
            console.log("test");
        });
    }
}

