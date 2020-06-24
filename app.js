
var chas = document.getElementById("char")
var bl = document.querySelector(".block")
var bgn = document.querySelector(".sta")
var lo = document.querySelector(".en")
var sc = document.querySelector(".dig")
var scor = document.querySelector(".score")
var fa = document.querySelector(".fa")
var run = document.querySelector(".run")
var score =0
var points;



console.log(chas.className)
const jump = function(){
    chas.classList.add("animate");
    setTimeout(function(){
        chas.classList.remove("animate");
       
    },500)
}

document.addEventListener('keyup', event =>{
    if(event.code=='Space'){
        jump();
    }
})

var check = setInterval(() => {
    var ctop = parseInt(window.getComputedStyle(chas).getPropertyValue("top"));
    var bleft = parseInt(window.getComputedStyle(bl).getPropertyValue("left"));
     if(bleft<50 && bleft>0 && ctop>=100){
         bl.style.animation="none";
         lo.style.display ="flex";
         fa.style.display="block"
         run.style.display="none"
         clearInterval(points) 
     }
}, 10);

function start(){
    bgn.style.display ="none"   
    setTimeout(() => {
        scor.style.display="flex"
        bl.classList.add("move")    
                points = setInterval(()=>{
                    score++
                    sc.innerHTML=score
                },1000)
        
    }, 750);
}

function retry(){
    location.reload();
}