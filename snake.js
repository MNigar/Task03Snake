var e = document.getElementById("box");

window.onkeydown=function(event){
    var x=e.offsetLeft;
    var y=e.offsetTop;
    if(event.keyCode==37)
    {
    e.style.left=(x-5)+"px";
     
    }
    else if(event.keyCode==38)
    {
    e.style.top=(y-5)+"px";
    }
    else if(event.keyCode==39)
    {
    e.style.left=(x+5)+"px";
    }
    else if(event.keyCode==40)
    {
    e.style.top=(y+5)+"px";
    }

}


// inter= setInterval(function(){
//     e.style.left=posX+"px"
//     posX+=10;
// },100);

