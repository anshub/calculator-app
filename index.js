let firstNumber;
let secondNumber;
let resultEl;

function readElements(){
     firstNumber = document.getElementById("first-num");
     secondNumber = document.getElementById("second-num");
     resultEl = document.getElementById("result-btn"); 
     errorEl = document.getElementById("error");
     errorEl.innerText=""
     resultEl.innerHTML="Result: "                  
}

function setResult(result){
    if(Number.isNaN(result)){
        errorEl.innerText="Please input only numbers"
    }
    else{
        resultEl.innerHTML="Result: "+result
    }
}
function add(){
    readElements();
    let result = Number(firstNumber.value)+Number(secondNumber.value)
    setResult(result);
}

function subtract(){
    readElements();
    let result = Number(firstNumber.value)-Number(secondNumber.value)
    setResult(result);
}

function multiply(){
    readElements();
    let result = Number(firstNumber.value)*Number(secondNumber.value)
    setResult(result);
}

function divide(){
    readElements();
    let result = Number(firstNumber.value)/Number(secondNumber.value)
    setResult(result);
}

