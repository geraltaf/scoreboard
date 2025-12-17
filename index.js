let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let scoreHome = 0;
let scoreGuest = 0;

function add1home(){
  scoreHome = scoreHome + 1;
  homeScore.textContent = scoreHome;
}

function add2home(){
  scoreHome += 2;
  homeScore.textContent = scoreHome;
}

function add3home(){
  scoreHome += 3;
  homeScore.textContent = scoreHome;
}

function add1guest(){
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
}

function add2guest(){
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
}

function add3guest(){
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
}

function resetScore(){
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}