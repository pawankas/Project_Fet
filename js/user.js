qusetionsListResult = [];
function updateAnswer(questionId, qusetionAnswer){
    let resultObject  = qusetionsListResult.find(x => x.id === questionId);
    let qusetionAnswerArray = resultObject.Answer;
    qusetionAnswerArray.push({Answer: qusetionAnswer});
    let Comment = resultObject.Comment;
    let Like = resultObject.Like;
    let payload = { 
    categoryName: resultObject.categoryName,
    qusetionName: resultObject.qusetionName,
    categoryId: resultObject.categoryId,
    approved: resultObject.approved,
    createdDate: resultObject.createdDate,
    Answer:qusetionAnswerArray,
    Comment:Comment,
    Like:Like,
}
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", 'http://localhost:5555/Qusetions/'+questionId, true);
    xmlHttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlHttp.onload = function () {
        var result = JSON.parse(xmlHttp.responseText);
    if(result){
        alert("Successfully Answered");
        getQusetions();
    }
    }
    xmlHttp.send(JSON.stringify(payload));
}

function sendAnswer(questionId){
let answer = document.getElementById('answer'+questionId).value;
updateAnswer(questionId, answer);
}
function getQusetions() {
    qusetionsListResult = JSON.parse(QusetionsList());
    let str = '<div class="container1"><div class="row">';
    for (let i = 0; i < qusetionsListResult.length; i++) {
        if(qusetionsListResult[i].approved == 'Approved by Admin'){
        str += 
         '<div class="card col-md-4" style="text-align:left">';
            
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
                str +='Answer:<br><textarea id="answer'+qusetionsListResult[i].id+'"></textarea>';
                str+='<br><button type="button" id="answer'+qusetionsListResult[i].id+'" onclick="sendAnswer('+qusetionsListResult[i].id+')">Send Answer</button>';

                str += '</div>';
            }
            }
            str += '</div></div>';
           
 
    document.getElementById("qusetions").innerHTML = str;
}

getQusetions();