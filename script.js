const Button = document.getElementById("button");
const ClickCounter = document.getElementById("ClickCounter");

let Counter = 0;

Button.addEventListener("click", (event) => {
    Counter++;
    ClickCounter.innerText = `${Counter} Clicks`;
    
    Button.style.animation = "salto .1s linear";
    
    setTimeout(() => {
        Button.style.animation = "idle"
    }, 101);

    if ((Counter % 10) == 0) {
        
    }
});