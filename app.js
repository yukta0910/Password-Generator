const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+/"

function getRandomData(data){
    return data[Math.floor(Math.random()*data.length)]
}


let passBox = document.getElementById("passbox");
console.log(passBox);
let passlength = document.getElementById("inlen")
let upperinput = document.getElementById("Upper-Case")
// console.log(upperinput)
let lowerinput = document.getElementById("Lower-Case")
let numbeinput = document.getElementById("numbers")
let symbolinput = document.getElementById("symbolss")




function passgenerate(password=""){

    if(upperinput.checked){
        password += getRandomData(upperCase)
    }
    if(lowerinput.checked){
        password += getRandomData(lowerCase)
    }
    if(numbeinput.checked){
        password += getRandomData(numbers)
    }
    if(symbolinput.checked){
        password += getRandomData(symbols)
    }
    if(password.length < passlength.value){
        return passgenerate(password)
    }
    passBox.value = truncateString(password,passlength.value)
    
}

passgenerate();

document.getElementById("btnn").addEventListener("click", function(){
    passgenerate();
})


//from google
function truncateString(str, num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}