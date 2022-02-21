function signUp(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("pwd").value; 
    let role = document.getElementById("role").value; 
   
    let paylod = 
        {
            "username": username,
            "password": password,
            "role": role
          }
          insertNewCredentials(paylod);
}

function insertNewCredentials(paylod){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://localhost:3333/login");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(paylod));
    window.open("login.html");
}