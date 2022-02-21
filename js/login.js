//checking
function check(){
  let username = document.getElementById("userEmail").value;
  let password = document.getElementById("userPw").value;
  let result = JSON.parse(checkLoginCredentials());
  console.log(result);
  let resultObject = search(username,password, result);
  if(resultObject){
    localStorage.setItem("userCredentials", JSON.stringify(resultObject));
  if(resultObject.role =='user' || resultObject.role == null || resultObject.role == ''){
    alert("Login Successful")
    window.open('forum.html');
  }else if(resultObject.role =='admin'){
    alert("Login Successful")
    window.open('adminHome.html');
  }
}else{
  alert("Entered credentials are wrong");
}
    }

    function checkLoginCredentials(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost:3333/login', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function search (username, password, inputArray){
  let result = null;
  for (let i=0; i < inputArray.length; i++) {
      if (inputArray[i].username == username && inputArray[i].password == password) {
        result = inputArray[i];
        break;
      }
  }
  return result;
}


// function check(){
//   var storedName = localStorage.getItem('email');
//   var storedPw = localStorage.getItem('pw');
  
//   var userName = document.getElementById('userEmail');
//   var userPw = document.getElementById('userPw');
//   var userRemember = document.getElementById("rememberMe");
  
//   if(userEmail.value == "user@123" && userPw.value == "root"){
//       alert('You are logged in.');
//       window.open("home.html")
//   }
//   else if (userEmail.value == "admin@123" && userPw.value == "root") {
//     alert('You are logged in.');
//       window.open("adminHome.html")
//   }
//   else{
//       alert('Error on login');
//   }
//   }