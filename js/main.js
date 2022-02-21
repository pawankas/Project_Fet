qusetionsListResult = [];
function QusetionsList() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'http://localhost:5555/Qusetions', false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var elapsed = current - previous;
    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }
    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }
    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }
    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    }
    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }
    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}


function getCurrenyUserLogin() {
   return JSON.parse(localStorage.getItem("userCredentials"));
}


function logout(){
    localStorage.removeItem("userCredentials");
}