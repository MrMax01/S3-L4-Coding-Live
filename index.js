//
const tabelloneNumber = 76;
const hasPicked = [];

const tableSection = document.getElementById("tabella");
const numberRandomButton = document.getElementById("randomNumber");

const createGrid = () => {
  for (let i = 0; i < tabelloneNumber; i++) {
    const boxNumber = document.createElement("div");
    // console.log(boxNumber);
    const p = document.createElement("p");
    // if (number === i + 1) {
    //   boxNumber.classList.add("showNumber");
    // }
    p.innerText = i + 1;
    boxNumber.appendChild(p);
    tableSection.appendChild(boxNumber);
  }
};

const pickNumber = () => {
  return Math.floor(Math.random() * 77 + 1);
};

numberRandomButton.addEventListener("click", () => {
  //   createGrid(pickNumber());
});
createGrid();
