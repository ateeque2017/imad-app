var button = document.getElementById("counter");
var counter = 0;
button.onclick = function () {
    var span = document.getElementById("span");
    counter = counter + 1;
    span.innerHTML = counter.toString();
    };