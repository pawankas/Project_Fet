function approveQusetion(qusetionId, status){
    let resultObject  = qusetionsListResult.find(x => x.id === qusetionId);
    let payload = { 
    categoryName: resultObject.categoryName,
    qusetionName: resultObject.qusetionName,
    categoryId: resultObject.categoryId,
    approved: status,
    createdDate: resultObject.createdDate,
    Comment:[],
    Like:[],
    Answer: [],
}
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", 'http://localhost:5555/Qusetions/'+qusetionId, true);
    xmlHttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlHttp.onload = function () {
        var result = JSON.parse(xmlHttp.responseText);
    if(result){
        alert("Successfully "+status);
        getQusetions();
    }
    }
    xmlHttp.send(JSON.stringify(payload));
}

function approveButton(qusetionId){
approveQusetion(qusetionId, 'Approved by Admin');
}

function rejectButton(qusetionId){
approveQusetion(qusetionId, 'Rejected by Admin');
}

function getQusetions() {
    qusetionsListResult = JSON.parse(QusetionsList());
    let str = '';
    for (let i = 0; i < qusetionsListResult.length; i++) {
        str += '<p>' + (i+1) +'. Question</p>';
        str += 
              '<div class="card-body">'+
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
                str+='<button type="button" id="approveButton'+i+'" onclick="approveButton('+qusetionsListResult[i].id+')">Approve</button>';
                str+='<button type="button" id="rejectButton'+i+'" style="margin-left:10px" onclick="rejectButton('+qusetionsListResult[i].id+')">Reject</button>';
            }
            str += '</div>';
 
    document.getElementById("qusetions").innerHTML = str;
}

getQusetions();