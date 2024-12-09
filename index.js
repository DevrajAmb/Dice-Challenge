
var randomNumber1 = Math.floor(Math.random() *6) +1; //1-6
/*now we will use the cancatination method add the number in 
the dice image so it will show the random number. 
*/
 
var randomDiceImage = "dice" + randomNumber1 + ".png";//dic1.png-dice6.png

/*now next part is to change the attribute value of the source.*/

var randomImageSource = "images/" + randomDiceImage; //image/dice1.png- images/dice6.png


//Now change the attributes of the element
var image1 = document.querySelectorAll("img")[0]


//in this we set the image attribute by using the setAttribute
image1.setAttribute("src", randomImageSource); 



//now we will do the same thing for the image 2.
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



/*now we will chage the title with the help of the inner HTML 
to tell the player 1 or 2 win or it is a draw */
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!✌️";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!✌️";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}