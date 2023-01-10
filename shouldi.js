const phrases = [
  'Hello There!',
  'General kenobi!'
]

function pickPhrase() {
  const phraseElement = document.getElementById('phrase')
  const randomIndex = Math.floor(Math.random() * phrases.length)
  console.log(randomIndex)
  phraseElement.innerHTML = phrases[randomIndex]
}

function shuffle() {
  alert('You do not need to shuffle, accept your answer!')
}

window.onload = function() { pickPhrase() }
