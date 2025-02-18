
//random number for left dice
var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6+1;
randomNumber1=Math.floor(randomNumber1);

//random number for right dice
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber2=Math.floor(randomNumber2);


// Select the left <img> element
var diceImage = document.getElementById("dice1");

// Set the image source dynamically
diceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");

//select the right <img> element
var diceImage = document.getElementById("dice2");

//set the image source dynamically
diceImage.setAttribute("src", "images/dice" + randomNumber2 +".png");


//select the <h1> tag
var resultText=document.getElementById("result");

//update the headline basedon result on dice value

if(randomNumber1>randomNumber2){
    resultText.innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    resultText.innerHTML="🚩 Player 2 Wins!";

}
else{
    resultText.innerHTML="It's a Draw! 🎲";
}