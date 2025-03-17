let turn = "x";
let squares = [];
let titel = document.querySelector(".xo");


let name1 = prompt("enter your name")
localStorage.setItem("names", name1)
namePlay = localStorage.getItem("names")
console.log(name1)


function end(num1,num2,num3){

    titel.innerHTML =  `${squares[num1]} winner` +" "+ "namePlay" ;
    document.getElementById(num1).style.backgroundColor = "rgb(255, 166, 0)" ;
    document.getElementById(num2).style.backgroundColor =  "rgb(255, 166, 0)";
    document.getElementById(num3).style.backgroundColor =   "rgb(255, 166, 0)";
    setInterval(function(){titel.innerHTML += ".";}, 1000);
    setTimeout(function(){location.reload();},4000); 
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    end(1,2,3)
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) 
    {
        end(4,5,6)
      }
  
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[8] != ""
  ) {
    
        end(7,8,9)
      
  }

  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[5] != ""
  ) {
    end(1,5,9)
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[5] != ""
  ) {
    end(3,5,7)
  }
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[4] != ""
  ) {
    end(1,4,7)
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[5] != ""
  ) {
    end(2,5,8)
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[6] != ""
  ) {
    end(3,6,9)
  }
 
}


function game(id) {;
  let element = document.getElementById(id);
  let titel = document.querySelector(".xo");
  

  if (turn === "x" && element.innerHTML === "") {
    element.innerHTML = "x";
    titel.innerHTML = "o";
    turn = "o";
  } else if (turn === "o" && element.innerHTML === "") {
    element.innerHTML = "o";
    titel.innerHTML = "x";
    turn = "x";
  }
  winner();
}
