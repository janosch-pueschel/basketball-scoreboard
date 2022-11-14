let homeScore = 0;

function addOneHome() {
  homeScore += 1;
  document.getElementById("home_score").textContent = homeScore;
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

function addTwoHome() {
  homeScore += 2;
  document.getElementById("home_score").textContent = homeScore;
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

function addThreeHome() {
  homeScore += 3;
  document.getElementById("home_score").textContent = homeScore;
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

let guestScore = 0;

function addOneGuest() {
  guestScore += 1;
  document.getElementById("guest_score").textContent = guestScore;
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

function addTwoGuest() {
  guestScore += 2;
  document.getElementById("guest_score").textContent = guestScore;
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

function addThreeGuest() {
  guestScore += 3;
  document.getElementById("guest_score").textContent = guestScore;
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

function reset() {
  homeScore = 0;
  document.getElementById("home_score").textContent = homeScore;
  guestScore = 0;
  document.getElementById("guest_score").textContent = guestScore;
  document.getElementById("home_score").className = "score--loser";
  document.getElementById("guest_score").className = "score--loser";
}
