const PwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");

const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");

const lowerEl = document.getElementById("lower");

const symbolEl = document.getElementById("symbol");

const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbol = "!@#$%^&*()_+-=/~`";

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword(){
    const len = lenEl.value;
    let password = "";
    for(let i = 0; i<len; i++){
        const x = generateX();
        password += x;
    }
    PwEl.innerText = password;
}

function generateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUppercase());
    }

    if(lowerEl.checked){
        xs.push(getLowercase());
    } 

    if(numberEl.checked){
        xs.push(getNumber());
    }
}

