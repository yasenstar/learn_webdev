// grab a reference of our "canvas" using its id
const canvas = document.getElementById('canvas');

/* get a "context". Without "context", we can't draw on canvas. */
const ctx = canvas.getContext('2d');

/* some extra variables */
const netWidth = 4;
const netHeight = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;

let upArrowPressed = false;
let downArrowPressed = false;

/* some extra variables ends */

/* object */
// net
const net = {
    x: canvas.width / 2 - netWidth / 2,
    y: 0,
    width: netWidth,
    height: netHeight,
    color: "#FFF"
};

// user paddle
const user = {
    x: 10,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: '#FFF',
    score: 0
};

// user paddle
const ai = {
    x: canvas.width - (paddleWidth + 10),
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: '#FFF',
    score: -100
};

// ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: '#05EDFF'
};

// function to draw net
function drawNet() {
    // set the color of net
    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height);
}

// function to draw score
function drawScore(x, y, score) {
    ctx.fillStyle = '#fff';
    ctx.font = '35px sans-serif';
    ctx.fillText(score, x, y);
}

// function to draw paddle
function drawPaddle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// function to drass ball
function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

/* moving Paddles */
// add an eventListener to browser window
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

// gets activated when we press down a key
function keyDownHandler(event) {
    //get the keyCode
    switch (event.keyCode) {
        case 38:
            // set upArrowPressed = true
            upArrowPressed = true;
            break;
        // "down arrow" key
        case 40:
            downArrowPressed = true;
            break;
    }
}

// gets activated when we release the key
function keyUpHandler(event) {
    switch (event.keyCode) {
        // "up arrow" key
        case 38:
            upArrowPressed = false;
            break;
        // "down arrow" key
        case 40:
            downArrowPressed = false;
            break
    }
}

/* moving Paddles section end */

// update function, to update things position
function update() {
    // move the paddle
    if (upArrowPressed && user.y > 0) {
        user.y -= 8;
    } else if (downArrowPressed && (user.y < canvas.height - user.height)) {
        user.y += 8;
    }

    // check if ball hits top or bottom wall

    // move the ball
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // ai paddle movement

    // collision detection on paddles
}

// render function draws everyting on to canvas
function render() {
    // set a style
    ctx.fillStyle = "#333";
    // draw the black board
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawNet();
    drawScore(canvas.width / 4, canvas.height / 6, user.score);
    drawScore(3 * canvas.width / 4, canvas.height / 6, ai.score);
    drawPaddle(user.x, user.y, user.width, user.height, user.color);
    drawPaddle(ai.x, ai.y, ai.width, ai.height, ai.color);
    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

// render();

// gameLoop
function gameLoop() {
    // update() function here
    update();
    // render() function here
    render();
}

// calls gameLoop() function 60 times per second
setInterval(gameLoop, 1000 / 60);