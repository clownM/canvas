(function(){
    var canvas = document.getElementsByTagName("canvas");
    var video = document.getElementById("myvideo");
    var button = ["play","pause","stop","forward","backward"];
    var input = document.getElementsByTagName('input');
    var span = document.getElementsByTagName("span");
    var fun = [];
    fun[0] = function(){
        video.play();
    };
    fun[1] = function(){
        video.pause();
    };
    fun[2] = function(){
        video.currentTime = 0;
        video.pause();
    };
    fun[3] = function(){
        video.currentTime += 3;
    };
    fun[4] = function(){
        video.currentTime -= 3;
    };
    for(var i = 0;i<canvas.length-1;i++){
        var ctx = canvas[i+1].getContext("2d");
        ctx.font="20px Georgia";
        ctx.textAlign = "center";    //横向居中
        ctx.textBaseline = "middle"; //纵向居中
        ctx.fillStyle = "#f00";
        ctx.fillText(button[i],60,30);
        
        canvas[i+1].addEventListener("click",fun[i]);
    }
    
    var ctx1 = canvas[0].getContext("2d");
    var i = window.setInterval(function(){
        ctx1.drawImage(video,0,0);
    },1);
    
    video.ontimeupdate = function(){
        input[0].value = this.currentTime / this.duration * 100;
        input[1].value = this.volume*100;
        span[1].innerHTML = Math.floor(this.currentTime);
    };
    input[0].addEventListener("change",function(){
        video.currentTime = this.value/100*video.duration;
    },false);
    input[1].addEventListener("change",function(){
        video.volume = this.value/100;
    },false);
    video.onloadedmetadata = function(){
        span[0].innerHTML = Math.floor(this.duration);
    };
})();