
function QusetionsList() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'http://localhost:5555/Qusetions', false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function getAllCategories()  {
    qusetionsListResult = JSON.parse(QusetionsList());
    let str = '<div class="container1"><div class="row">';
    for (let i = 0; i < qusetionsListResult.length; i++) {
        if(qusetionsListResult[i].approved == 'Approved by Admin'){
        str +=
         '<div class="card col-md-4" style="text-align:left">'+
            '<img src="../Images/question.png"  style="width:30px;height:30px" alt="...">';
             str += '<p>' + (i+1) +'. Question</p>'+
                '<h5 class="card-title">Category: '+qusetionsListResult[i].categoryName +'</h5>'+
                '<p class="card-text">Question: '+qusetionsListResult[i].qusetionName +'</p>'+
                '<p class="card-text">Action: '+qusetionsListResult[i].approved +'</p>'+
                '<p class="card-text"><small class="text-muted"> Qusetion Created: '+timeDifference(new Date(), new Date(qusetionsListResult[i].createdDate)) +'</small></p>';
                if(qusetionsListResult[i].Answer.length > 0){
                    str += 'Answers: '  
                    for (let j = 0; j < qusetionsListResult[i].Answer.length; j++) {  
                        str +='<p>'+(j+1)+'. '+qusetionsListResult[i].Answer[j].Answer+'</p>';

                    }
                }
                str += '</div>';
            }
            }
            str += '</div></div>';
           
   document.getElementById("container1").innerHTML = str;
}


function searchByCategory(categoryId) {
    // alert("Selected Category is "+categoryId);
    let qusetionsList = JSON.parse(QusetionsList());
    let filteredQuestionList = [];
    let str = "";
    for (let i = 0; i < qusetionsList.length; i++) {
      //str += "<div >" + qusetionsList[i].qusetionName + "</div><br>";
      if (qusetionsList[i].categoryName == categoryId) {
        filteredQuestionList.push(qusetionsList[i]);
      }
    }
    console.log("Java Filtered" + JSON.stringify(filteredQuestionList));
  //   qusetionsList = JSON.parse(filteredQuestionList);
    str = "";
    for (let i = 0; i < filteredQuestionList.length; i++) {
      //str += "<div >" + qusetionsList[i].qusetionName + "</div><br>";
  
      str +=
      '<div class="card col-md-4" style="text-align:left">'+
         '<img src="../Images/question.png"  style="width:30px;height:30px" alt="...">';
          str += '<p>' + (i+1) +'. Question</p>'+
             '<h5 class="card-title">Category: '+filteredQuestionList[i].categoryName +'</h5>'+
             '<p class="card-text">Question: '+filteredQuestionList[i].qusetionName +'</p>'+
             '<p class="card-text">Action: '+filteredQuestionList[i].approved +'</p>'+
             '<p class="card-text"><small class="text-muted"> Qusetion Created: '+timeDifference(new Date(), new Date(qusetionsListResult[i].createdDate)) +'</small></p>';
             if(qusetionsListResult[i].Answer.length > 0){
                 str += 'Answers: '  
                 for (let j = 0; j < qusetionsListResult[i].Answer.length; j++) {  
                     str +='<p>'+(j+1)+'. '+qusetionsListResult[i].Answer[j].Answer+'</p>';

                 }
             }
             str += '</div>';
         
}
  
    document.getElementById("container1").innerHTML = str;
}
getQusetions();