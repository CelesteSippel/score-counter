const main = () => {
  console.log('hello - world')
}

let counterOne = 0
let counterTwo = 0

const addOneTeamOne = () => {
  if (counterOne < 21) {
    // add 1 to counter
    counterOne = counterOne + 1
    // update HTML
    document.querySelector('p.team-1-score').textContent = counterOne
  } else {
    console.log('Team 1 wins!')
  }
  winnerWinner()
}

const subtractOneTeamOne = () => {
  if (counterOne >= 1) {
    // subtract 1 from counter
    counterOne = counterOne - 1
    // update HTML
    document.querySelector('p.team-1-score').textContent = counterOne
  } else {
    console.log('No negative numbers, Team 1!')
  }
}

const addOneTeamTwo = () => {
  if (counterTwo < 21) {
    // add 1 to counter
    counterTwo = counterTwo + 1
    // update HTML
    document.querySelector('p.team-2-score').textContent = counterTwo
  } else {
    console.log('Team 2 wins!')
  }
  winnerWinner()
}

const subtractOneTeamTwo = () => {
  if (counterTwo >= 1) {
    // subtract 1 from counter
    counterTwo = counterTwo - 1
    // update HTML
    document.querySelector('p.team-2-score').textContent = counterTwo
  } else {
    console.log('No negative numbers, Team 2!')
  }
}

const winnerWinner = () => {
  if (counterOne === 21) {
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-1-name').classList.add('blink_me')
  } else if (counterTwo === 21) {
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-name').classList.add('blink_me')
  }
}

const resetGame = () => {
  counterOne = 0
  counterTwo = 0
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-1-name').classList.remove('blink_me')
  document.querySelector('.team-2-name').classList.remove('blink_me')
  document.querySelector('p.team-1-score').textContent = counterTwo
  document.querySelector('p.team-2-score').textContent = counterTwo
}

const updateTeamOneName = () => {
  console.log('updating name')
  // get current value of the text
  const newName = document.querySelector('.team-1-input').value
  // update the name in HTML
  document.querySelector('h2.team-1-name').textContent = newName
}
const updateTeamTwoName = () => {
  console.log('updating name')
  // get current value of the text
  const newName = document.querySelector('.team-2-input').value
  // update the name in HTML
  document.querySelector('h2.team-2-name').textContent = newName
}

const updatePeriodTracker = () => {
  console.log('updating period tracker')
  // get the current value of the text
  const newPeriod = document.querySelector('.period-input').value
  // update the period in HTML
  document.querySelector('p.period-tracker').textContent = newPeriod
}

const startTimer = (duration, display) => {
  let timer = duration,
    minutes,
    seconds
  setInterval(() => {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

// Fine the buttons, when you're clicked, do this thing
window.onload = function() {
  var thirtyMinutes = 60 * 30,
    display = document.querySelector('#time')
  startTimer(thirtyMinutes, display)
}

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneTeamOne)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneTeamOne)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneTeamTwo)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneTeamTwo)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)
// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)
// Fined the buttons, when you're clicked, do this thing
document
  .querySelector('.update-period-tracker')
  .addEventListener('click', updatePeriodTracker)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.game-reset')
  .addEventListener('click', resetGame)

  .addEventListener('DOMContentLoaded', main)
