//
const tabelloneNumber = 76;
const tabella = [];
const numTrovati = [];

const tableSection = document.getElementById("tabella");
const numberRandomButton = document.getElementById("randomNumber");

const createGrid = (number = null) => {
  tableSection.innerHTML = "";
  for (let i = 0; i < tabelloneNumber; i++) {
    const boxNumber = document.createElement("div");
    // console.log(boxNumber);
    const p = document.createElement("p");
    p.innerText = i + 1;

    if (tabella.length < tabelloneNumber) tabella.push({ num: i + 1, flag: false });
    /*CONTROLLA SE IL NUMERO è STATO SELEZIONATO */
    if (number === i + 1 || tabella[i].flag) {
      boxNumber.classList.add("showNumber");
      tabella[i].flag = true;
    }

    boxNumber.appendChild(p);
    tableSection.appendChild(boxNumber);
  }
  console.log(tabella);
};

const pickNumber = () => {
  return Math.floor(Math.random() * 77 + 1);
};

numberRandomButton.addEventListener("click", () => {
  const num = pickNumber();
  if (!numTrovati.includes(num)) {
    numTrovati.push(pickNumber);
    createGrid(num);
  } else {
    console.log("NUMERO GIA USCITO");
  }
});
createGrid();
