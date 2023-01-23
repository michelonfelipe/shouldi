const THIRTY_SECONDS_IN_MS = 30000

const last = JSON.parse(localStorage.getItem('previousPhrase'))
const lastPhrase = last?.phrase
const lastGeneratedAt = last?.generatedAt
const lastPhraseTooRecent = lastPhrase != null && (Date.now() - THIRTY_SECONDS_IN_MS) < lastGeneratedAt


function pickPhrase() {
  const phrase = generatePhrase()
  const phraseElement = document.getElementById('phrase')

  phraseElement.innerHTML = phrase
}

function generatePhrase() {

  // to prevent from just refreshing and getting another answer
  if (lastPhraseTooRecent) {
    return lastPhrase
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

function showTipIfNeeded() {
  if (!lastPhraseTooRecent) {
    document.getElementById('same-answer-tip').style.display = 'none'
  }
}

window.onload = function() {
  pickPhrase()
  showTipIfNeeded()
}

const phrases = [
  'Yes',
  'That will be awesome',
  "YOLOOOOOOO (that's a yes)",

  'No',
  'Why even bother',
  'Take a nap instead',
  'Expect to be disappointed'
]
