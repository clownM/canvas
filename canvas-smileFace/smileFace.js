window.onload = function(){                              //(function(){....})();
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();        //脸
    ctx.arc(400,400,200,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();        //左眼
    ctx.arc(320,320,30,0,2*Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.arc(320,320,30,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(320,320,30,0,Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    

    ctx.beginPath();        //右眼
    ctx.arc(480,320,30,0,2*Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.arc(480,320,30,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(480,320,30,0,Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    
    ctx.beginPath();      //眉毛
    ctx.moveTo(320,290);
    ctx.lineTo(320,265);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(315,292);
    ctx.lineTo(305,265);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(325,292);
    ctx.lineTo(335,265);
    ctx.stroke();
    ctx.beginPath();      //眉毛
    ctx.moveTo(480,290);
    ctx.lineTo(480,265);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(475,292);
    ctx.lineTo(465,265);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(485,292);
    ctx.lineTo(495,265);
    ctx.stroke();
    
    ctx.beginPath();        //鼻子
    ctx.arc(400,400,15,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();        //嘴
    ctx.moveTo(320,480);
    ctx.lineTo(480,480);
    ctx.quadraticCurveTo(350,600,320,480);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();
    
    canvas.onmouseover = function(){
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(480,320,30,0,2*Math.PI);
        ctx.fillStyle = "gray";
        ctx.fill();
    };
    canvas.onmouseout = function(){
        ctx.beginPath();        //右眼
        ctx.arc(480,320,30,0,2*Math.PI);
        ctx.fillStyle = "gray";
        ctx.fill();
        ctx.arc(480,320,30,0,2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(480,320,30,0,Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    };
};