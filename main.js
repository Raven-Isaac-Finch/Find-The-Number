/*----------Hearts Loaded----------*/
function createHeart() {
    let heart = document.createElement('i');
    heart.className = 'fa-solid fa-heart';
    return heart;
}

let lifeCount = 6;
let heartContainer = document.getElementById('heart-container');

window.addEventListener('DOMContentLoaded', function() {
    if (lifeCount === 6) {
        heartContainer.appendChild(createHeart());
        heartContainer.appendChild(createHeart());
        heartContainer.appendChild(createHeart());
        heartContainer.appendChild(createHeart());
        heartContainer.appendChild(createHeart());
        heartContainer.appendChild(createHeart());
    };
    console.log(lifeCount);
});

/*----------Check User Guess----------*/
const randomNumber = (Math.random() * 100).toFixed();
console.log(randomNumber);

const userInput = document.getElementById('guess');
const submit = document.getElementById('submitBtn');
const lastGuess = document.getElementById('lastGuess-text');
const feedbackText = document.getElementById('feedback-text');
const feedbackContainer = document.getElementById('arrow-container');
const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');

submit.addEventListener('click', function() {
    if (userInput.value === '') {
        alert("Please Don't Leave the Space Empty");
    } else if (isNaN(userInput.value)) {
        alert("Numbers only please!");
    } else if (userInput.value > 99 || userInput.value < 1) {
        alert("The Number is between 1 and 100!");
    } else if (userInput.value > randomNumber) {
        lastGuess.innerHTML = `${userInput.value}`;
        feedbackText.innerHTML = 'Guess lower!';
        upArrow.className = 'fa-solid fa-arrow-up arrow-disabled';
        downArrow.className = 'fa-solid fa-arrow-down arrow-enabled';
        loseLife();
        checkIfDead();
    } else if (userInput.value < randomNumber) {
        lastGuess.innerHTML = `${userInput.value}`;
        feedbackText.innerHTML = 'Guess higher!';
        upArrow.className = 'fa-solid fa-arrow-up arrow-enabled';
        downArrow.className = 'fa-solid fa-arrow-down arrow-disabled';
        loseLife();
        checkIfDead();
    } else if (userInput.value === randomNumber) {
        lastGuess.innerHTML = `${userInput.value}`;
        feedbackText.innerHTML = 'Good Job!';
        console.log(lifeCount);
        feedbackContainer.className = 'youWin-container';
        upArrow.className = 'fa-solid fa-arrow-up arrow-disabled';
        downArrow.className = 'fa-solid fa-arrow-down arrow-disabled';
        
        const againBtn = document.createElement('button');
        againBtn.className = 'btn-again';
        againBtn.setAttribute('id', 'again-btn');
        againBtn.textContent = 'Again!';
        feedbackContainer.appendChild(againBtn);

        againBtn.addEventListener('click', function() {location.reload();});
    }
    userInput.value = '';
});

function checkIfDead() {
    if (lifeCount === 0) {
        feedbackText.innerHTML = `You lose! It was ${randomNumber}.`;
        feedbackContainer.className = 'youLose-container';
        upArrow.className = 'fa-solid fa-arrow-up arrow-disabled';
        downArrow.className = 'fa-solid fa-arrow-down arrow-disabled';
    
        const againBtn = document.createElement('button');
        againBtn.className = 'btn-again';
        againBtn.setAttribute('id', 'again-btn');
        againBtn.textContent = 'Again!';
        feedbackContainer.appendChild(againBtn);
    
        againBtn.addEventListener('click', function() {location.reload();});
    }
    console.log(lifeCount);
}

function loseLife() {
    lifeCount -= 1;
    let heart = document.querySelector('.fa-heart');
    heart.parentElement.removeChild(heart);
}

