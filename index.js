//
/*SELEZIONO GLI ELEMENTI PER LA TABELLA DI GIOCO */
const tableSection = document.getElementById("tabella");
const numberRandomButton = document.getElementById("randomNumber");
const tabella = [];
const numTrovati = [];
const tabelloneNumber = 76;

/*SELEZIONO GLI ELEMENTI PER LA TABELLA DEL GIOCATORE */
const tableSectionPlayer = document.getElementById("tabellaGiocatore");
const tabellaGiocatore = [];
console.log(tabellaGiocatore);
/*--------------------------------FINE VARIBAILI GLOBALI---------------------------*/

/*FUNZIONE CHE MI CREA LA TABELLA CON L'ELEMENO PRESO SE C'è */
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
};
/*CREO LA TABELLA DEL GIOCATORE */
const createGridPlayer = () => {
  for (let i = 0; i < 24; i++) {
    const boxNumber = document.createElement("div");
    // console.log(boxNumber);
    const p = document.createElement("p");
    p.innerText = pickNumber();
    boxNumber.appendChild(p);
    tableSectionPlayer.appendChild(boxNumber);
  }
};
/*FUNZIONE CHE MI RITORNA UN NUMERO CASUALE TRA 1 E 76 */
const pickNumber = () => {
  return Math.floor(Math.random() * 77 + 1);
};

/*METTO IN ASCOLTO L'EVENTO CLICK SUL BOTTONE */
numberRandomButton.addEventListener("click", () => {
  const num = pickNumber();
  if (!numTrovati.includes(num)) {
    numTrovati.push(num);
    createGrid(num);
  } else {
    console.log("NUMERO GIA USCITO");
  }
  //   console.log(numTrovati);
});
createGrid();
createGridPlayer();
