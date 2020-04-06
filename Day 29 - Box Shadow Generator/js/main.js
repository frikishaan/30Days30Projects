const box = document.querySelector(".box"),
  horizontal = document.getElementById("horizontal"),
  vertical = document.getElementById("vertical"),
  blur = document.getElementById("blur"),
  spread = document.getElementById("spread"),
  opacity = document.getElementById("opacity");

const verticalVal = document.getElementById("vertical-val"),
  horizontalVal = document.getElementById("horizontal-val"),
  blurVal = document.getElementById("blur-val"),
  spreadVal = document.getElementById("spread-val"),
  opacityVal = document.getElementById("opacity-val"),
  copy = document.querySelector(".copy"),
  code = document.getElementById("code");

horizontal.addEventListener("input", changeValues);
vertical.addEventListener("input", changeValues);
blur.addEventListener("input", changeValues);
spread.addEventListener("input", changeValues);
opacity.addEventListener("input", changeValues);

function changeValues() {
  // Box styling
  box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${
    blur.value
  }px ${spread.value}px rgba(0,0,0,${opacity.value / 100})`;

  box.innerHTML = `box-shadow:${horizontal.value}px ${vertical.value}px ${
    blur.value
  }px ${spread.value}px rgba(0,0,0,${opacity.value / 100})`;

  code.value = `box-shadow:${horizontal.value}px ${vertical.value}px ${
    blur.value
  }px ${spread.value}px rgba(0,0,0,${opacity.value / 100})`;

  // Display Values
  horizontalVal.innerHTML = `${horizontal.value}px`;
  verticalVal.innerHTML = `${vertical.value}px`;
  blurVal.innerHTML = `${blur.value}px`;
  spreadVal.innerHTML = `${spread.value}px`;
  opacityVal.innerHTML = `${opacity.value / 100}`;
}

// Init
box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${
  blur.value
}px ${spread.value}px rgba(0,0,0,${opacity.value / 100})`;

box.innerHTML = `box-shadow:${horizontal.value}px ${vertical.value}px ${
  blur.value
}px ${spread.value}px rgba(0,0,0,${opacity.value / 100})`;

code.value = `box-shadow:${horizontal.value}px ${vertical.value}px ${
  blur.value
}px ${spread.value}px rgba(0,0,0,${opacity.value / 100})`;

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(code.value);
  copy.innerHTML = "Copied!";

  setTimeout(() => {
    copy.innerHTML = "Copy Code";
  }, 2000);
});
