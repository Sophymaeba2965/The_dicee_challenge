var randomNumber1= Math.floor((Math.random()*6)+1);
alert("player 1 your random number is "+randomNumber1);
var images1="images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",images1);


var randomNumber2=Math.floor((Math.random()*6)+1);
alert("player 2, your random number is "+randomNumber2);
var images2="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",images2);



if ("randomNumber1>randomNumber2") {
    document.querySelector("h1").innerHTML="Player 1 is the winner";
    //alert("player1 is the winner!");

    
} else if ("randomNumber1<randomNumber2") {
    document.querySelector("h1").innerHTML="Player 2 is the winner";
    //alert("player 2 is the winner!");

} else{
    document.querySelector("h1").innerHTML="Draw"; 
    //alert("draw!");

    
}



    

 
    






