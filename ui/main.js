var button = document.getElementById("counter");

button.onclick = function () {
   // create request
    var request = new XMLHttpRequest();
    request.onreadystatechanged = function(){
       if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200) {
                var counter =  request.responseText;
                var span = document.getElementById("span");
                span.innerHTML = counter.toString();
            }
        } 
    };
    request.open('GET','http://atisim.imad.hasura-app.io/counter',true);
    request.send(null);
};