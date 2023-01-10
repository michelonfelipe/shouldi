const phrases = [
  'Hello There!',
  'General kenobi!'
]

function pickPhrase() {
  const phrase = generatePhrase()
  const phraseElement = document.getElementById('phrase')

  phraseElement.innerHTML = phrase
}

function generatePhrase() {
  const previousPhrase = JSON.parse(localStorage.getItem('previousPhrase'))
  const ONE_MINUTE_IN_MS = 60000

  // to prevent from just refreshing and getting another answer
  if (previousPhrase != null && (Date.now() - ONE_MINUTE_IN_MS) < previousPhrase.generatedAt) {
    return previousPhrase.phrase
  } else {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    const phrase = phrases[randomIndex]
    localStorage.setItem('previousPhrase', JSON.stringify({ generatedAt: Date.now(), phrase: phrase }))
    return phrase
  }
}

function shuffle() {
  alert('You do not need to shuffle, accept your answer!')
}

window.onload = function() { pickPhrase() }
