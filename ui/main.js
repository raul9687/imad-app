var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names=request.responseText;
                var comments=request.responseText;
                names=JSON.parse(names);
                comments=JSON.parse(comments);
                var list='';
                for(var i=0; i< names.length; i++){
                    list += '<li>' + names[i] + '<br>' + comments[i] + '</li>';
                }
                var ul=document.getElementById('list');
                ul.innerHTML=list;
            }
        }
    };
    
    request.open('GET','http://raul9687.imad.hasura-app.io/load',true);
    request.send(null);

var button=document.getElementById('counter');
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter=request.responseText;
                var span=document.getElementById('likes');
                span.innerHTML=counter.toString();
            }
        }
    };
    
    request.open('GET','http://raul9687.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names=request.responseText;
                var comments=request.responseText;
                names=JSON.parse(names);
                comments=JSON.parse(comments);
                var list='';
                for(var i=0; i< names.length; i++){
                    list += '<li>' + names[i] + '<br>' + comments[i] + '</li>';
                }
                var ul=document.getElementById('list');
                ul.innerHTML=list;
            }
        }
    };
    
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    var commentInput=document.getElementById('comment');
    var comment=commentInput.value;
    request.open('GET','http://raul9687.imad.hasura-app.io/submit-comment?name=' + name + '&comment=' + comment,true);
    request.send(null);
};