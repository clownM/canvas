(function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.translate(300,300);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.rotate(Math.PI/5);
    ctx.fillRect(0,0,100,50);
    ctx.fill();    
})();