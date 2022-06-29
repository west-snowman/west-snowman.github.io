//把processing的程式，翻譯成p5.js javaScript
//(0)左邊程式(processing)寫好
//(1)去 pde2js.herokuapp.com 翻譯成p5.js

function setup() {
    initializeFields();
    // 設定
    createCanvas(500, 500);
}

// 幾個棋子
var N;

// 陣列
var x;

// 陣列
var y;

function draw() {
    background(color(0xFC, 0xAE, 0x03));
    // line(0, 50, 150, 50); ///(直)
    for (var i = 0; i <= 10; i++) {
        // /畫棋盤
        // /橫
        line(50 * i, 0, 50 * i, 500);
        // /直
        line(0, 50 * i, 500, 50 * i);
    }
    for (var i = 0; i < N; i++) {
        // /畫棋子
        ellipse(x[i], y[i], 45, 45);
    }
    ellipse(mouseX, mouseY, 45, 45);
}

function mousePressed() {
    // /按一次滑鼠
    // 省空間
    x[N] = mouseX;
    // 省空間
    y[N] = mouseY;
    N++;
}

function initializeFields() {
    N = 0;
    x = new Array(100);
    y = new Array(100);
}
