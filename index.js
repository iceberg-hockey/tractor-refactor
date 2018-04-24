

var tractor = new Tractor();

var tractorSound = new Audio('sounds/tractor.mp3');
tractorSound.loop = false;

function playSound(){
    tractorSound.currentTime = 0.3;
    tractorSound.play();
}

var K = 1/Math.sqrt(2);

function transform(x,y){
    var _x = (x+1)*80;
    var _y = (2-y)*80;
    return {left: parseInt(_x*K-_y*K+80)+'px', top: parseInt(_x*K+_y*K+130)+'px'};
}

function move(x,y){
    const coord = transform(x,y);
    document.querySelector('img').style.left = coord.left;
    document.querySelector('img').style.top = coord.top;
}

function rotate(orientation){
    if (orientation == "N") {
        document.querySelector('img').src="img/tractor-e.png";
    } else if (orientation == "E") {
        document.querySelector('img').src="img/tractor-s.png";
    } else if (orientation == "S") {
        document.querySelector('img').src="img/tractor-w.png";
    } else if (orientation == "W") {
        document.querySelector('img').src="img/tractor-n.png";
    }
}



tractor.onMove = function (){
    move(tractor.getPositionX(), tractor.getPositionY());
};
tractor.onTurn = function(){
    rotate(tractor.getOrientation());
};

window.onload = function(){
    move(0,0);
    rotate("N");
    playSound();
};



var handlerStarted = Date.now();

document.addEventListener('keydown', function(event){
    if(Date.now() - handlerStarted < 700) return;
    handlerStarted = Date.now();
    if(event.keyCode == 81){
        tractor.turnClockwise();
        playSound();
    }else if(event.keyCode == 87){
        tractor.moveForwards();
        playSound();
    }
});
