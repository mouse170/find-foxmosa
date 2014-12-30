var c = document.querySelector("canvas");
var cx = c.getContext("2d");
var mousedown = false;
img = new Image();
img.src = "img/foxmosa.png";
var max = 515;
var min = 1;
var h, w;
var temph = 0;
var tempw = 0;
document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode = 19) {
        setupCanvas();
        randomPosition();
    }
};

function randomPosition() {
    h = Math.floor(Math.random() * (max - min + 1) + min);
    w = Math.floor(Math.random() * (max - min + 1) + min);
    temph = h + 125;
    tempw = w + 125;
}


// 設定畫布大小，以及滑鼠行為模式
function setupCanvas() {
    cx.fillStyle = "gray";
    cx.fillRect(0, 0, 640, 640);
    // requestAnimationFrame(setupCanvas);
}

function ruleReadMe() {
    cx.fillText("找小莎", 160, 100);
    cx.fillStyle = "orange";
    cx.font = "100px sans-if";
    requestAnimationFrame(ruleReadMe);

}


function drawCanvas() {
    c.height = 640;
    c.width = 640;
    cx.lineWidth = 50;
    cx.lineCap = 'round';
    cx.strokeStyle = 'white';



}

function foxmosa() {
    cx.drawImage(img, 0, 0, img.width, img.height, h, w, 125, 125);
    //測試動畫
    // requestAnimationFrame(foxmosa);
    //


}



// 設定滑鼠事件，按下才開始繪圖
function onmousedown(ev) {
    mousedown = true;
    //取消事件默認動作
    ev.preventDefault();
}

function onmouseup(ev) {
    mousedown = false;
    //取消事件默認動作
    ev.preventDefault();

}

function onmousemove(ev) {
    var x = ev.clientX;
    var y = ev.clientY;

    if (mousedown) {
        if (x >= h && x <= temph && y >= w && y <= tempw) {
            foxmosa();
            setTimeout(function() {
                alert('找到小莎了！\n\n請按R重新開始');
            }, 250);
            mousedown = false;
        } else
            paint(x, y);
    }
}


function paint(x, y) {
    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x, y);
    cx.stroke();
    cx.closePath();
}

c.addEventListener('mousedown', onmousedown, false);
c.addEventListener('mouseup', onmouseup, false);
c.addEventListener('mousemove', onmousemove, false);



drawCanvas();

randomPosition();

setupCanvas();

ruleReadMe();