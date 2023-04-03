//Rudamentary Whack-A-Mole game
let bounds = [125, 250, 375];
let moleX = 0;
let moleY = 0;
let totalScore = -1;

function setup() {
  createCanvas(500, 500);
  textSize(20);
  frameRate(60);
}

function generateCoord() {
  return random(bounds);
}

function increaseScore() {
  let d = dist(mouseX, mouseY, moleX, moleY);
  if (d < 30) {
    ++totalScore;
    moleX = -100;
    moleY = -100;
    background(220);
  }
  return totalScore;
}

function updateScore() {
  let score = 'Score: ';
  let scoreNum = increaseScore();
  score += str(scoreNum);
  return score;
}

let timer = 0;
function draw() {
  text(updateScore(), 10, 25);
  if(frameCount % 600 == true) {
    timer = frameCount;
    background(220);
    moleX = generateCoord();
    moleY = generateCoord();
    ellipse(moleX, moleY, 60, 60);
  }
  if (frameCount == timer + 60) {
    moleX = -100;
    moleY = -100;
    background(220);
  }
}