var d1 = Math.floor(Math.random()*6)+1;
var d2 = Math.floor(Math.random()*6)+1;
var a1="images/dice"+d1+".png";
var a2="images/dice"+d2+".png";
if(d1>d2)
document.querySelector("h1").innerHTML="Player 1 wins";
else if(d2>d1)
document.querySelector("h1").innerHTML="Player 2 wins";
else
document.querySelector("h1").innerHTML="It's a tie";
document.querySelector(".img1").setAttribute("src",a1);
document.querySelector(".img2").setAttribute("src",a2);
