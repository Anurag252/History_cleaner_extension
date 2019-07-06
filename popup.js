function searchTerm() {
    chrome.runtime.sendMessage({ searchtext: document.getElementById('search').value ,action : "find"},
        function (response) {
            document.getElementById("result").textContent = "Total " +response.count +" entries found in history" ;
        });
    
}

function deleteTerm() {
    chrome.runtime.sendMessage({ searchtext: document.getElementById('search').value, action: "delete" },
        function (response) {
            document.getElementById("result").textContent = "All entries with search term  '" + response.term + "' have been deleted from history";
        });
}
// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    console.log("12");
    document.getElementById("searchTerm").addEventListener('click', function () {
        searchTerm();
    });
    document.getElementById("deleteTerm").addEventListener('click', function () {
        deleteTerm();
    });
    
});
