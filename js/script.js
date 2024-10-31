const allButtons = document.querySelectorAll("button");
const display = document.getElementById("screen");
let accumulator = 0;
let newNumber = false;
let prevCalc = "";


const calc = {
    bPlus:  function(number1, number2) {
        return number1 + number2;
    },

    bMinus:  function(number1, number2) {
        return number1 - number2;
    },

    bTimes:  function(number1, number2) {
        return number1 * number2;
    },

    bDiv:  function(number1, number2) {
        return number1 / number2;
    },
}

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        buttonOperation(button.id);
    });
});

function buttonOperation(button) {

    if ((Number(button[1]) >=0) && (Number(button[1]) <=9)){
        if (newNumber) {
            display.innerHTML = button[1];
            newNumber = false;
        }
        else display.innerHTML += button[1];
    }

    else if (button === "bDot"){
        if (newNumber || (display.innerHTML === "0") || (display.innerHTML === "")) {
            display.innerHTML = "0.";
            newNumber = false;
        }
        if (display.innerHTML.indexOf(".") === -1){
            display.innerHTML += "."
        }
    }
    else if (button === "ce"){
        display.innerHTML = "";
        accumulator = 0;
        newNumber = false;
        prevCalc = "";
    }
    else if (button === "eq"){
        console.log("zonk");
        accumulator = calc[prevCalc](accumulator,Number(display.innerHTML));
        console.log(accumulator);
        prevCalc = "";
        //display.innerHTML = "";
        newNumber = true;
        display.innerHTML = accumulator;
        accumulator = 0;
    }

    else {
        if (accumulator === 0){
            accumulator = Number(display.innerHTML);
            newNumber = true;
            prevCalc = button;
        }
        else {
            accumulator = calc[prevCalc](accumulator,Number(display.innerHTML));
            console.log(accumulator);
            prevCalc = button;
            //display.innerHTML = "";
            newNumber = true;
            display.innerHTML = accumulator;
        }
    }
}

