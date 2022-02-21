var currentUser =null;
function createQusetion() {
    let category = document.getElementById("framework").value;
    let qusetion = document.getElementById("question").value;
    let catgoriesList = JSON.parse(categories());
    let resultObject = search(category, catgoriesList);
    let paylod = {
        "categoryId": resultObject.id,
        "categoryName": category,
        "qusetionName": qusetion,
        "approved": "Not Approved",
        "createdDate": new Date(),
        "Answer": [],
        "Comment":[],
        "Like":[]
    }
    checkLoginCredentials(paylod);
}

function checkLoginCredentials(paylod) {
    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
    xmlhttp.open("POST", "http://localhost:5555/Qusetions");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(paylod));
    alert("Your qusetions send to admin but it is displayed after approval");
    window.open("home.html");
}

function categories() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'http://localhost:4444/Categories', false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function search(categoryName, inputArray) {
    let result = null;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].categoryName == categoryName) {
            result = inputArray[i];
            break;
        }
    }
    return result;
}



function getCurrentUser(){
    currentUser =  getCurrenyUserLogin();
    document.getElementById("currentUser").innerHTML = currentUser.username;
}

getCurrentUser();


