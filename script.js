const GAME_SETTINGS = {
    
    images :["image/medved.png",
            "image/bober.png",
            "image/xorec.png",
            "image/slon.jpg",
    ],
    tresholds : [10,20,30]
}

let score = 0;
let currentImageIndex = 0;

const prevImageIndex = GAME_SETTINGS.images[-1];
const clickButton = document.getElementById("click-button");
const scoreText = document.getElementById("score");
const mainImage = document.getElementById('main-image')
const progressFill = document.getElementById('progress-fill')
const progressText = document.getElementById('progress-text')
 
function handleClick(){
    score += 1;
    scoreText.textContent = score;
    updateProgress();

}

function selectImage(){
    mainImage.src = GAME_SETTINGS.images[currentImageIndex];
}

function updateProgress(){
    const threshold = GAME_SETTINGS.tresholds[currentImageIndex];
    let percent = (score / threshold) * 100;
    progressFill.style.width = `${percent}%`;
    progressText.textContent =`${Math.round(percent)}%`

    if(score === threshold){
    
        currentImageIndex++;
        selectImage();

    }

}

function initGame(){
    updateProgress();
    mainImage.src = GAME_SETTINGS.images[currentImageIndex];
    clickButton.addEventListener('click', handleClick);
   
}

window.addEventListener('load', initGame);
