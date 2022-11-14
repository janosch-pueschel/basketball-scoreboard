let homeScore = 0;

function addOneHome() {
  homeScore += 1;
  document.getElementById("home_score").textContent = homeScore;
  highlight();
}

function addTwoHome() {
  homeScore += 2;
  document.getElementById("home_score").textContent = homeScore;
  highlight();
}

function addThreeHome() {
  homeScore += 3;
  document.getElementById("home_score").textContent = homeScore;
  highlight();
}

let guestScore = 0;

function addOneGuest() {
  guestScore += 1;
  document.getElementById("guest_score").textContent = guestScore;
  highlight();
}

function addTwoGuest() {
  guestScore += 2;
  document.getElementById("guest_score").textContent = guestScore;
  highlight();
}

function addThreeGuest() {
  guestScore += 3;
  document.getElementById("guest_score").textContent = guestScore;
  highlight();
}

function reset() {
  homeScore = 0;
  document.getElementById("home_score").textContent = homeScore;
  guestScore = 0;
  document.getElementById("guest_score").textContent = guestScore;
  document.getElementById("home_score").className = "score--loser";
  document.getElementById("guest_score").className = "score--loser";
}

function highlight() {
  if (homeScore === guestScore) {
    document.getElementById("home_score").className = "score--loser";
    document.getElementById("guest_score").className = "score--loser";
  } else if (homeScore > guestScore) {
    document.getElementById("home_score").className = "score--winner";
    document.getElementById("guest_score").className = "score--loser";
  } else if (homeScore < guestScore) {
    document.getElementById("home_score").className = "score--loser";
    document.getElementById("guest_score").className = "score--winner";
  }
}
