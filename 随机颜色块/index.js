(function (){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    

    
    var x,y;
   /* canvas.addEventListener("click",function(event){
        event = event||window.Event;
        x=event.clientX-canvas.offsetLeft;
        y=event.clientY-canvas.offsetTop;
        var randomcolor = "rgb("+parseInt(256*Math.random())+
           ","+parseInt(256*Math.random())+
            ","+parseInt(256*Math.random())+")";
        ctx.beginPath();
        ctx.fillStyle = randomcolor;  
        ctx.fillRect(x,y,50,50);
        ctx.fill();
    });*/
    canvas.onclick = function(e){
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
        ctx.beginPath();
        ctx.fillStyle = "#"+       ("00000"+Math.floor(Math.random()*parseInt("ffffff",16)).toString(16)).substr(-6);
        ctx.fillRect(x,y,50,50);
        ctx.fill();
    };
    
})();