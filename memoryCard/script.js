const allCards = document.querySelectorAll("#card");

let firstCard = null;
let secondCard = null ;
let canClick = true;
let score = 0;
let score1= document.getElementById("score");


allCards.forEach((card)=>{
card.addEventListener("click",handleCardClicked);
})

function handleCardClicked(){
    if(!canClick) return;

    if (this.classList.contains("flip")) return;

    this.classList.add("flip")

    if(!firstCard) firstCard = this;
    else if(!secondCard) secondCard = this;
    
    let img1 = firstCard ? firstCard.firstElementChild.src : null;
    let img2 = secondCard ? secondCard.firstElementChild.src : null;

    if(img1 === img2){
        firstCard = null;
        secondCard = null;
        score++;
        score1.innerHTML = score;
      
        if (score === 6) handleGameOver();
        
    }
    else if (img1 && img2){

        canClick = false;

setTimeout(()=>{
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    firstCard = null;
    secondCard = null;
    canClick = true
        
},1000);}

}

function handleGameOver(){
    setTimeout(()=>{
        let retVal = confirm("you win \n Play agin")
        if (retVal=== true){
            location.reload();
        }
    },1000)
}

allCards.forEach((card)=>{
    let randPos = Math.floor(Math.random() * 12);
    card.style.order = randPos;
})

function handRestart(){
    location.reload();
}
