// Getting the html elements
const decrementBtn = document.getElementById("DecrementBtn");
const incrementBtn = document.getElementById("IncrementBtn");
const displayValue = document.getElementById("display-value");
const resetBtn = document.getElementById("ResetBtn");

// Decrement button click
decrementBtn.addEventListener("click",() => {
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value - 1;
    }
    else {
        alert("Negative value not allowed");
    }
});

// Increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerHTML);
    if(value < 10){
        displayValue.innerText = value + 1;
    }
    else{
        alert("10+ value not allowed"); 
    }
})

// reset button click
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});
