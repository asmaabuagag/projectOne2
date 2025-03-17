//Q1

function printSmaller(num1,num2){
    if(num1 < num2){
        console.log(`${num1} is smaller`);
        // return num1
    }else if( num2 < num1){
        console.log(`${num2} is smaller`);
        // return num2
    }else{
        console.log(`${num1} and ${num2} are even!`);
        // return `${num1} and ${num2} are the same`
    }
}

printSmaller(5,9)

//Q2

function charCounter(str1,str2,str3,str4){
    let counter = 0;
    if(str1.length > 3){
        counter++
    }
    if(str2.length > 3){
        counter++
    }
    if(str3.length > 3){
        counter++
    }
    if(str4.length > 3){
        counter++
    }
    return counter
}

console.log(charCounter('abcd','ac','abced','12354')); //3

function inputCheck(){
    let str = document.getElementById('inpt').value;
    let index = str.indexOf("A")
    if(index != -1){
        let newStr = str.replaceAll("A","a");
        console.log(newStr);
    }else{
        console.log(str);
    }
}

//Q5

function checkStr (str){
    let firstLetter = str.charAt(0)
    let lastLetter = str.charAt(str.length-1)
    if(firstLetter == lastLetter ){
        let newStr = str.slice(1,lastLetter)
        console.log(newStr);
    }else{
        console.log(str);
    }
}

//Q6
function printString(str){
    if(str.includes("*")){
        let newStr = str.replace("*","")
        console.log(newStr);
    }else if(str.indexOf("@") != -1){
        // let newStr = "*" + str + "*";
        let newStr = `*${str}*`
        console.log(newStr);
    }else if(str.indexOf('₪') != -1){
        console.log("New Shekel");
    }
}

//parseInt()  , Number() , typeof , isNaN()
//    convert to num      return type     check if its not a number

//parseInt('4') // 4
//paraseInt('asdf') // NaN
//Number('4') // 4
//typeof 'eitan' // string
//typeof 7 // number
function calculate(){
    let input = document.getElementById("userInput").value;
    let coin = document.getElementById("coin").value;
    let parsedInput = parseInt(input)
    if(isNaN(parsedInput)){
        alert(`${input} is not a number`)
    }else if(coin == 'usd'){
        alert(`${input} ${coin} in Shekels is ${input*3.9}`)
    }else if(coin == 'euro'){
        alert(`${input} ${coin} in Shekels is ${input*4.2}`)
    }else if(coin == 'pound'){
        alert(`${input} ${coin} in Shekels is ${input*5}`)
    }

}