const main = () => {
  console.log('hello - world')
}

let counter = 0

const addOneToTeamOneScore = () => {
  console.log('add 1 to a counter')
  //  get current value of the counter
  //  add 1 to counter
  counter = counter + 1
  console.log(counter)
  //  update the HTML
  //  hey DOM, find the p.team-1-score, updates the content
  document.querySelector('p.team-1-score').textContent = counter
}

const subtractOneToTeamOneScore = () => {
  console.log('subtract 1 from a counter')
  //  get current value of the counter
  //  subtract 1 from counter
  counter = counter - 1
  console.log(counter)
  //  update the HTML
  //  hey DOM, find the p.team-1-score, updates the content
  document.querySelector('p.team-1-score').textContent = counter
}

const addOneToTeamTwoScore = () => {
  console.log('add 1 to a counter')
  //  get current value of the counter
  //  add 1 to counter
  counter = counter + 1
  console.log(counter)
  //  update the HTML
  //  hey DOM, find the p.team-2-score, updates the content
  document.querySelector('p.team-2-score').textContent = counter
}

const subtractOneToTeamTwoScore = () => {
  console.log('subtract 1 from a counter')
  //  get current value of the counter
  //  subtract 1 from counter
  counter = counter - 1
  console.log(counter)
  //  update the HTML
  //  hey DOM, find the p.team-2-score, updates the content
  document.querySelector('p.team-2-score').textContent = counter
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

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds
  setInterval(function() {
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

window.onload = function() {
  var thirtyMinutes = 60 * 30,
    display = document.querySelector('#time')
  startTimer(thirtyMinutes, display)
}

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToTeamOneScore)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneToTeamOneScore)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToTeamTwoScore)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneToTeamTwoScore)

// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)
// Find the buttons, when you're clicked, do this thing
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)
// Fine the buttons, when you're clicked, do this thing
document
  .querySelector('.update-period-tracker')
  .addEventListener('click', updatePeriodTracker)

document.addEventListener('DOMContentLoaded', main)
