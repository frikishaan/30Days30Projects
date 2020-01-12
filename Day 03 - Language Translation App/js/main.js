const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?";

const key =
  "trnsl.1.1.20191228T061040Z.d9342f8fd96a868f.a4178c94ae861cd1c08d050fafe2bca154b713d2";

const text = document.getElementById("text"),
  lang = document.getElementById("lang"),
  text_lang = document.getElementById("text-lang"),
  btn = document.getElementById("btn"),
  result = document.querySelector(".result");
langs = document.querySelector(".languages");

// Translate fucntion
function translate() {
  btn.innerHTML = "Translating...";

  fetch(
    url +
      "key=" +
      key +
      "&text=" +
      text.value +
      "&lang=" +
      text_lang.value +
      "-" +
      lang.value
  )
    .then(res => res.text())
    .then(res => handleResponse(JSON.parse(res)))
    .catch(err => console.error(err));
}

// Handle response
function handleResponse(data) {
  // console.log(data);

  if (data.code == 200) {
    result.innerHTML = data.text;
    langs.innerHTML = data.lang;
  } else {
    result.innerHTML = `<span class="error">Ops! There is an error - ${data.message}</span>`;
  }

  btn.innerHTML = "Translate";
}

// Form submit listener
document
  .getElementById("translate-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    if (text.value === "") {
      result.innerHTML = `<span class="error">The message should not be blank.</span>`;
    } else {
      translate();
    }
  });
