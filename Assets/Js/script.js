const container = document.getElementById("container");
const btnNumber = document.getElementById("btnRandom");
const tables = document.getElementById("table");
const extractNumbers = [];

document.addEventListener("load", init());

function init() {
  table();
  extraction();
}

for (let i = 0; i < 90; i++) {
  const numbers = document.createElement("div");
  numbers.innerText = i + 1;
  numbers.classList.add("number");
  container.appendChild(numbers);
}

function extraction() {
  btnNumber.addEventListener("click", function () {
    extract();
  });
}

function extract() {
  let extractNumber = Math.floor(Math.random() * 90) + 1;
  if (extractNumbers.lenght == 90) {
    alert("Hai esaurito tutti i numeri");
    btnNumber.setAttribute("disabled", "true");
    return;
  } else if (extractNumbers.includes(extractNumber)) {
    extract();
  } else {
    extractNumbers.push(extractNumber);
    alreadyExtract(extractNumber);
  }
  let showNumber = document.getElementById("extractNumber");
  showNumber.innerText = extractNumber;
}
function alreadyExtract(divNumber) {
  const extract = document.querySelectorAll("#container div");
  const extractTable = document.querySelectorAll("#table div");
  extract.forEach((element) => {
    if (element.innerText == divNumber) {
      element.classList.add("extract");
    }
  });
  extractTable.forEach((element) => {
    if (element.innerText == divNumber) {
      element.classList.add("extract");
    }
  });
}

function table() {
  for (let i = 0; i < 24; i++) {
    const numberTable = document.createElement("div");
    numberTable.innerText = Math.floor(Math.random() * 90) + 1;
    numberTable.classList.add("table");
    tables.appendChild(numberTable);
  }
}
