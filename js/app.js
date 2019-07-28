 function move() {
            var a = document.getElementById("left");
           a.style.left = '50%'
            document.getElementById("overlay-left").style.display = "none";
            document.getElementById("overlay-right").style.display = "block";    
            document.getElementById("left-c").style.transform = "none";    
            document.getElementById("right-c").style.transform = "scale(0.5)";    
            
        }function move2() {
            
            var a = document.getElementById("left");
           a.style.left = '0';
            document.getElementById("left-c").style.transform = "";    
            document.getElementById("right-c").style.transform = "none";    
             document.getElementById("overlay-left").style.display = "block";
            document.getElementById("overlay-right").style.display = "none";
        }
     var button = document.getElementById("trigger");
     var button2 = document.getElementById("trigger2");
        button.onclick = function () {move();};
        button2.onclick = function () {move2();};