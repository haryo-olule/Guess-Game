// Select elements
const attemptsElement = document.getElementById("attempts");    
const buttons = document.querySelectorAll("button");

// Game variables
let attempts = 5;
const randomNumber = Math.floor(Math.random() * 10) + 1;

attemptsElement.textContent = attempts;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const guess = Number(button.textContent);
        
        if (guess === randomNumber) {
            alert("Congratulations! You guessed the correct number!");
            button.classList.add("correct");
            buttons.forEach(btn => btn.disabled = true);
        } else {
            button.classList.add("wrong");
            button.disabled = true;
            attempts--;
            attemptsElement.textContent = attempts;
            
            if (attempts === 0) {
                alert("You've run out of attempts. Better luck next time!");
                buttons.forEach(btn => btn.disabled = true);
            }
        }
    })
})