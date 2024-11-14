const container = document.getElementById("container");
const btnNumber = document.getElementById("btnRandom");
const tables = document.getElementById("table");
const extractNumbers = [];

document.addEventListener("load", init());

function init() {
  extraction();
}

for (let i = 0; i < 90; i++) {
  const numbers = document.createElement("div");
  numbers.innerText = i + 1;
  numbers.classList.add("number");
  container.appendChild(numbers);
}

function extraction() {
  btnRandom.addEventListener("click", function () {
    let extractNumber = Math.floor(Math.random() * 90) + 1;
    extractNumbers.push(extractNumber);
    console.log(extractNumbers);
    let showNumber = document.getElementById("extractNumber");
    showNumber.innerText = extractNumber;
    const extract = document.querySelectorAll("#container div");
    for (let i = 0; i < extract.length; i++) {
      if (extract[i].innerText == extractNumber) {
        extract[i].classList.add("extract");
      }
    }
  });
}

function table() {
    for (let i = 0; i < 24; i++) {
        
    }
}
