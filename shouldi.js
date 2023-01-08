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

window.onload = function() {pickPhrase()}
