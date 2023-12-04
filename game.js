// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1 = Math.round(Math.random()*100);
let number2 = Math.round(Math.random()*100);

let numberBox1 = document.getElementById("number1");
let numberBox2 = document.getElementById("number2");

numberBox1.innerText=number1;
numberBox2.innerText=number2;

// Iteration 3: Creating variables required to make the game functional
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let mulBtn = document.getElementById("mul");
let divideBtn = document.getElementById("divide");
let modulusBtn = document.getElementById("modulus");
let score = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3;
let numberBox3 = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    number1 = Math.round(Math.random()*100);
    number2 = Math.round(Math.random()*100);
    if(number1 < number2){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    numberBox1.innerText=number1;
    numberBox2.innerText=number2;


    let operatorArr = ["+","-","*","/","%"];
    let randomIndex=Math.floor(Math.random()*operatorArr.length);
    // if(operatorArr[randomIndex]=="+"){
    //     number3=number1+number2;
    // }
    switch(operatorArr[randomIndex]){
        case "+":
            number3=number1+number2;
            break;
        case "-":
            number3=number1-number2;
            break;
        case "*":
            number3=number1*number2;
            break;
        case "/":
            number3=Math.floor(number1/number2);
            break;
        case "%":
            number3=number1%number2;
            break;
        default:
            randomise();
    }

    numberBox3.innerText=number3;

} 

randomise();

// Iteration 6: Making the Operators (button) functional

plusBtn.onclick=()=>{
    if(number1+number2 === number3){
        score++;
        randomise();
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
}
minusBtn.onclick=()=>{
    if(number1-number2 === number3){
        score++;
        randomise();
        resetTime();
    }
    else{
        location.href="./gameover.html";
    }
}
mulBtn.onclick=()=>{
    if(number1*number2 === number3){
        score++;
        randomise();
        resetTime();
    }
    else{
        location.href="./gameover.html";
    }
}
divideBtn.onclick=()=>{
    if(number1/number2 === number3){
        score++;
        randomise();
        resetTime();
    }
    else{
        location.href="./gameover.html";
    }
}
modulusBtn.onclick=()=>{
    if(number1%number2 === number3){
        score++;
        randomise();
        resetTime();
    }
    else{
        location.href="./gameover.html";
    }
}

// Iteration 7: Making Timer functional
let time = 100;
let timer = document.getElementById("timer");
let timerId;

function startTimer(){
    time = 100;
    time.innerText=time;
    timerId=setInterval(()=>{
        time--;
        if(time == 0){
            location.href="./gameover.html";
        }
    timer.innerText = time;
    localStorage.setItem("gameScore",score);
    },1000)
}

startTimer();


function resetTime(timerId){
    clearInterval(timerId);
    startTimer();
}