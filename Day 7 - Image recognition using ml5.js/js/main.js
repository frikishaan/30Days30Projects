const img = document.getElementById("file"),
  output = document.querySelector(".output"),
  draggable = document.querySelector(".draggable"),
  loading = document.querySelector(".loading"),
  labels = document.querySelector(".labels");

// console.log("ml5 version:", ml5.version);

// Load Model
const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

// When the model is loaded
function modelLoaded() {
  loading.style.display = "none";
  draggable.style.display = "flex";
  console.log("Model Loaded!");
}

// image upload event using button
img.addEventListener("change", function(e) {
  // Show Image
  let newImg = new Image();
  newImg.src = e.target.files[0];
  newImg.setAttribute("id", "uploaded-img");
  newImg.crossOrigin = "anonymous";
  newImg.src = URL.createObjectURL(e.target.files[0]);

  newImg.onload = () => {
    output.innerHTML = "";
    img.value = null;
    output.appendChild(newImg);

    // Classify Image
    classifyImage(document.getElementById("uploaded-img"));
  };
});

// Drag n drop feature
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  window.addEventListener(
    eventName,
    e => {
      e.preventDefault();
      e.stopPropagation();
    },
    false
  );
});

draggable.addEventListener("dragenter", function(e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.add("dragover");
});

draggable.addEventListener("dragleave", function(e) {
  e.preventDefault();
  e.stopPropagation();

  this.classList.remove("dragover");
});

draggable.addEventListener("drop", function(e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.remove("dragover");
  // console.log(e.dataTransfer.files[0]);

  // Show file
  output.innerHTML = "";
  file = e.dataTransfer.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function() {
    let img = document.createElement("img");
    img.src = reader.result;
    img.setAttribute("id", "uploaded-img");
    output.appendChild(img);

    // Classify Image
    classifyImage(document.getElementById("uploaded-img"));
  };
});

function classifyImage(image) {
  classifier.classify(image, (err, results) => {
    // console.log(results);

    labels.innerHTML = "";

    if (err) {
      labels.innerHTML = `Error : ${err}`;
    } else {
      // Display results
      labels.innerHTML = `<h3>Predictions</h3>`;
      results.forEach(result => {
        labels.innerHTML += `<br>${
          result.label
        } - <span class="confidence">${result.confidence.toFixed(2)}</span>`;
      });
    }
  });
}
