console.log('Click Counter Exercise');

let clickCount = 0

document.getElementById("M5").onclick = function () {
    clickCount-=5;
    document.getElementById("countSum").innerHTML = clickCount;
}

document.getElementById("M1").onclick = function () {
    clickCount-=1;
    document.getElementById("countSum").innerHTML = clickCount;
}

document.getElementById("reset").onclick = function () {
    clickCount=0;
    document.getElementById("countSum").innerHTML = clickCount;
}

document.getElementById("P1").onclick = function () {
    clickCount+=1;
    document.getElementById("countSum").innerHTML = clickCount;
}

document.getElementById("P5").onclick = function () {
    clickCount+=5;
    document.getElementById("countSum").innerHTML = clickCount;
}

document.getElementById("M5").addEventListener("click", function(){
    let clickedBtn = document.getElementById("lastAction");
    clickedBtn.innerHTML = M5.value;
});

document.getElementById("M1").addEventListener("click", function(){
    let clickedBtn = document.getElementById("lastAction");
    clickedBtn.innerHTML = M1.value;
});

document.getElementById("reset").addEventListener("click", function(){
    let clickedBtn = document.getElementById("lastAction");
    clickedBtn.innerHTML = reset.value;
});

document.getElementById("P1").addEventListener("click", function(){
    let clickedBtn = document.getElementById("lastAction");
    clickedBtn.innerHTML = P1.value;
});

document.getElementById("P5").addEventListener("click", function(){
    let clickedBtn = document.getElementById("lastAction");
    clickedBtn.innerHTML = P5.value;
});
