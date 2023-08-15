var random1=Math.floor(Math.random()*6)+1;
var randomPic="image/dice"+random1+".png";
var pic1=document.querySelectorAll("img")[0];
pic1.setAttribute("src",randomPic);


var random2=Math.floor(Math.random()*6)+1;
var randomPic1="image/dice"+random2+".png";
var pic2=document.querySelectorAll("img")[1];
pic2.setAttribute("src",randomPic1);



if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}