let count = 0
document.getElementById("increase").onclick = function(){
    count = document.getElementById("count").textContent = ++count;
}

document.getElementById("reset").onclick = function(){
    count = document.getElementById("count").textContent = 0;
}

document.getElementById("decrease").onclick = function(){
    count = document.getElementById("count").textContent = --count;
}