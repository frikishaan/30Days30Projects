if (
  "SpeechRecognition" in window ||
  "webkitSpeechRecognition" in window ||
  "mozSpeechRecognition" in window ||
  "msSpeechRecognition" in window
) {
  // speech recognition API supported
  var recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
} else {
  // speech recognition API not supported
  console.error("Sorry, Speech Recognition is not supported in your browser.");
  document.querySelector(".error").style.display = "block";
  document.querySelector(".start").style.display = "none";
}

// Speech Recognition config
recognition.continuous = true;

// On recognize event
recognition.onresult = event => {
  const speechToText = event.results[event.results.length - 1][0];
  console.log(`${speechToText.transcript} - ${speechToText.confidence}`);

  let text = speechToText.transcript;

  document.querySelector(".command").innerHTML = text;

  // Commands
  if (
    text.indexOf("what is your name") >= 0 ||
    text.indexOf("what's your name") >= 0
  ) {
    //   Name
    speak("My name is Emma. What is your name?");
  } else if (text.indexOf("search for") >= 0) {
    //   Search

    // takeout the search term from string
    let q = text.substr(text.indexOf("for") + 3);
    console.log(q);

    speak(`Searching for ${q} on Google`);
    window.open(`https://google.com/search?q=${q}`);
  } else if (
    text.indexOf("what time is it") >= 0 ||
    text.indexOf("what's the time") >= 0
  ) {
    // time
    let t = currentTime();
    speak(t);
  } else if (text.indexOf("my name is") >= 0) {
    //   Greetings

    let name = text.substr(text.indexOf("is") + 2); // Split name from text
    speak(`Hello ${name}`);
  } else if (text.indexOf("who is your creator") >= 0) {
    //   Creator
    speak("Let me show you");
    window.open("http://frikishaan.xyz");
  } else if (text.indexOf("who is your favourite YouTube creator") >= 0) {
    // Youtube Channel
    speak(
      "Brad Traversy is my favourite, also there is a new creator named Florin Pop, he also makes some nice videos,  do check it out."
    );
  } else if (text.indexOf("bye") >= 0) {
    // Good bye
    speak("Good Bye, Have a great day!");
  } else if (
    text.indexOf("fuck off") >= 0 ||
    text.indexOf("sue you") >= 0 ||
    text.indexOf("bitch") >= 0 ||
    text.indexOf("bastard") >= 0 ||
    text.indexOf("asshole") >= 0
  ) {
    //   Abusing
    speak(`Don't be rude`);
  } else {
    //   None of the above
    speak(`Sorry, I can't recognize that`);
  }
};

// Declaring elements
const start = document.querySelector(".start"),
  main = document.querySelector(".container"),
  icon = document.querySelector(".fa-microphone");

start.addEventListener("click", function() {
  // Show bot
  main.style.display = "flex";
  this.style.display = "none";

  // Start recognizing
  recognition.start();
});

// Returns current time
function currentTime() {
  let date = new Date();
  return `It's ${date.getHours()} ${date.getMinutes()} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`;
}

// Speak function
function speak(text) {
  recognition.stop();

  let msg = new SpeechSynthesisUtterance(text);

  msg.onend = () => {
    console.log("End..");
    recognition.start();
  };

  window.speechSynthesis.speak(msg);
  return;
}

// Animating microphone while recording
recognition.onstart = () => {
  icon.classList.add("listening");
};
recognition.onend = () => {
  icon.classList.remove("listening");
};
