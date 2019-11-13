const hand = ["rock", "paper", "scissors"];

function playRound(humanSelection) {
  let computerSelection = hand[Math.floor(Math.random() * hand.length)];

  if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "paper") ||
    (humanSelection == "paper" && computerSelection == "rock")
  ) {
    document.querySelector(
      "#gameResult"
    ).innerHTML = `<p>${humanSelection} vs ${computerSelection}</p><h3>The human wins.</h3>`;
  } else if (humanSelection == computerSelection) {
    document.querySelector(
      "#gameResult"
    ).innerHTML = `<p>${humanSelection} vs ${computerSelection}</p><h3>Tie.</h3>`;
  } else {
    document.querySelector("#gameResult").innerHTML = `
      <p>${humanSelection} vs ${computerSelection}</p><h3>The computer wins.</h3>`;
  }
}

//hint: use objects
