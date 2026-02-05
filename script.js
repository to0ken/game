const GAME_SETTINGS = [
    images =["image/bober.png",
            "image/xorec.png",
            "image/slon.jpg",
    ],
    tresholds = [10,20, 30]
]

let score = 0;
const clickButton = document.getElementById("click-button");
const scoreText = document.getElementById("score");
 
function handleClick(){
    score += 1;
    scoreText.textContent = score;

}

function initGame(){
    console.log("helloooo")

    clickButton.addEventListener('click', handleClick);


}

window.addEventListener('load', initGame)