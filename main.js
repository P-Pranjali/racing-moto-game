var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")


var liveScore = document.getElementById("live-score"); // new live score element

// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
      // Increase counter and update live score
    counter++;
    liveScore.innerHTML = `Score: ${counter}`; // use live-score, not #score
   
})
 

//rececar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 260){raceCar.style.left = (raceCarLeft + 130) + "px"}
    jumpsound.play()
};

    if(e.keyCode == "37"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 130) + "px"
        jumpsound.play()
    }

    }
})


//Game over
setInterval(function Gameover () {
    var blueCarTop = blueCar.offsetTop;
    var blueCarLeft = blueCar.offsetLeft;
    var raceCarTop = raceCar.offsetTop;
    var raceCarLeft = raceCar.offsetLeft;
    var blueCarHeight = blueCar.offsetHeight;
    var raceCarHeight = raceCar.offsetHeight;

    // Collision check
    if (
        blueCarLeft === raceCarLeft && 
        blueCarTop + blueCarHeight > raceCarTop && 
        blueCarTop < raceCarTop + raceCarHeight
    ) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter}`;
        counter = 0;
    }
}, 10);


