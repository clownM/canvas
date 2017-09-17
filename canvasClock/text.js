(function onload (){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(300,300,200,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    
    var time = new Date();
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hour12 = time.getHours();
    var hour24 = time.getHours();
    
    for(var i = 0;i < 60;i++){
        ctx.save();
        ctx.beginPath();
        ctx.translate(300,300);
        ctx.lineWidth = 5;
        ctx.rotate(Math.PI/30 * i);
        ctx.moveTo(0,-180);
        ctx.lineTo(0,-195);
        ctx.strokeStyle = "#0f0";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    
    for(var i = 0;i < 12;i++){
        ctx.save();
        ctx.beginPath();
        ctx.translate(300,300);
        ctx.lineWidth = 8;
        ctx.rotate(Math.PI/6 * i);
        ctx.moveTo(0,-180);
        ctx.lineTo(0,-195);
        ctx.strokeStyle = "#f00";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    
    ctx.save(); 
    ctx.translate(300,300);
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    
    //秒针  
    ctx.save();
    ctx.translate(300,300);
    ctx.rotate(sec*6*Math.PI/180);  
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#fff"
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo(0,-175);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    
    //分针  
    ctx.save();
    ctx.translate(300,300);
    ctx.rotate(min*6*Math.PI/180 + sec/60*Math.PI/180*6);  
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#555";
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo(0,-160);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    
    
    //时针  
    if(hour12 >= 12){
        hour12 -= 12;
    };
    ctx.save();
    ctx.translate(300,300);
    ctx.rotate(hour12*30*Math.PI/180 + min/60*Math.PI/180*30 + sec/3600*Math.PI/180*6);  
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#f80"
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo(0,-140);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.font="small-caps bold 20px arial";
    ctx.textAlign = "center";    //横向居中
    ctx.textBaseline = "middle";
    ctx.fillText('本地时间：' + hour24 +':'+ min +':'+ sec,300,550);
    ctx.restore();
//    setTimeout(onload,30);
    setInterval(onload,30);

})();