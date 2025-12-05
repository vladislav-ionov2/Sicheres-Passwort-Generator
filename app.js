// Einfache Variablen für die Checkboxen
const gross = document.getElementById("gross");
const klein = document.getElementById("klein");
const zahlen = document.getElementById("zahlen");
const sonder = document.getElementById("sonder");

const btn = document.getElementById("btn");
const passwortFeld = document.getElementById("passwort");
const laengeInput = document.getElementById("laenge");
const info = document.getElementById("info");
const kopierenBtn = document.getElementById("kopieren");

// Zeichen-Bereiche (einfach gehalten)
const GROSS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const KLEIN = "abcdefghijklmnopqrstuvwxyz";
const ZAHLEN = "0123456789";
const SONDER = "!@#$%&*_-?";

// Funktion erstellt das Passwort
function machePasswort() {
  let laenge = parseInt(laengeInput.value);
  let zeichen = "";

  // Sammeln, was ausgewählt ist
  if (gross.checked) zeichen += GROSS;
  if (klein.checked) zeichen += KLEIN;
  if (zahlen.checked) zeichen += ZAHLEN;
  if (sonder.checked) zeichen += SONDER;

  // Falls nichts ausgewählt ist
  if (zeichen === "") {
    info.textContent = "Bitte mindestens eine Option auswählen.";
    return;
  } else {
    info.textContent = "";
  }

  let pw = "";

  // Einfacher Loop wie ein Anfänger
  for (let i = 0; i < laenge; i++) {
    let zufall = Math.floor(Math.random() * zeichen.length);
    pw += zeichen[zufall];
  }

  passwortFeld.value = pw;
}

// Passwort erstellen Button
btn.addEventListener("click", machePasswort);

// Kopieren Funktion
kopierenBtn.addEventListener("click", function () {
  if (passwortFeld.value === "") return;

  passwortFeld.select();
  document.execCommand("copy");

  info.textContent = "Passwort kopiert!";
  setTimeout(() => info.textContent = "", 2000);
});
