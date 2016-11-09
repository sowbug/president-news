var elements = document.getElementsByClassName("titletext");

function endsWithPunctuation(s) {
  if (s.endsWith(".")) {
    return true;
  }
  if (s.endsWith("!")) {
    return true;
  }
  if (s.endsWith("?")) {
    return true;
  }
}

function randomHilariousCatchPhrase() {
  var CATCH_PHRASES = [
    "Believe me.",
    "Bigly.",
    "I kid you not.",
    "That is what people are telling me.",
    "There's something going on.",
    "Trust me.",
    "You mark my words."
  ];
  return " " + CATCH_PHRASES[Math.floor(Math.random() * CATCH_PHRASES.length)];
}

for (var i in elements) {
  var e = elements[i];
  if (!endsWithPunctuation(e.innerText)) {
    e.innerText += ".";
  }

  e.innerText += randomHilariousCatchPhrase();
}
