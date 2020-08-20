
var minion = document.getElementById("character")
var banana = document.querySelector(".block")
var startblock = document.querySelector(".start")
var lostblock = document.querySelector(".end")
var scorecount = document.querySelector(".digit")
var scorecard = document.querySelector(".score")
var lostimg = document.querySelector(".lostimg")
var runimg = document.querySelector(".runimg")
var score =0
var points;

const jump = function(){
    minion.classList.add("animate");
    setTimeout(function(){
        minion.classList.remove("animate");  
    },500)
}

document.addEventListener('keyup', event =>{
    if(event.code=='Space'){
        jump();
    }
})

var check = setInterval(() => {
    var ctop = parseInt(window.getComputedStyle(minion).getPropertyValue("top"));
    var bleft = parseInt(window.getComputedStyle(banana).getPropertyValue("left"));
     if(bleft<50 && bleft>0 && ctop>=100){
         banana.style.animation="none";
         lostblock.style.display ="flex";
         lostimg.style.display="block"
         runimg.style.display="none"
         clearInterval(points) 
     }
}, 10);

function start(){
    startblock.style.display ="none"   
    setTimeout(() => {
        scorecard.style.display="flex"
        banana.classList.add("move")    
                points = setInterval(()=>{
                    score++
                    scorecount.innerHTML=score
                },1000)
    }, 750);
}

function retry(){
    location.reload();
}