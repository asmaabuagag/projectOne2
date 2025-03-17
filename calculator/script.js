let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function calc(x) {
  let display = document.getElementById("display");

  if (x >= "0" && x <= "9") {
    if (operator == "") { 
      num1 += x;
    } else {
      num2 += x;
    }
    display.value += x; 
    
  } else if (x == "+" || x == "-" || x == "*" || x == "/") { 
    operator = x;
    display.value += x;
  } else if (x == "C") {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    display.value = "";
  } else if (x == "=") { 
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
   
    if (operator === "+") {
      result = n1 + n2;
    } else if (operator === "-") {
      result = n1 - n2;
    } else if (operator === "*") {
      result = n1 * n2;
    } else if (operator === "/") {
      result = n1 / n2;
    }
   
    display.value = result;
  
    num1 = result;
    num2 = "";
    operator = "";
  }
}



