// ACQUISIZIONE DATI

console.log("Calcola il tuo Biglietto");

// Chiedere numero km
const travelLenght = parseInt(prompt("Inserire il numero di Km del viaggio"));
console.log(`La lunghezza del viaggio è di ${travelLenght}`);

// Chiedere età passeggero
const userAge = parseInt(prompt("Inserire l'età del passeggero"));
console.log(`L'età del passeggero è ${userAge}`);

// ELABORAZIONE

// Definire classi di sconto
const discountJunior = 0.2;
const discountSenior = 0.4;

// Definire prezzo standard
const standardPrice = travelLenght * 0.21;
console.log(`Il prezzo standard del viaggio è di ${standardPrice}€`);

// OUTPUT

// Calcolo del prezzo
let finalPrice = standardPrice;
// SE passeggero è <18 anni
//      -> Applicare eventuale sconto minorenni
// Ricalcolare il prezzo
if (userAge < 18) {
  finalPrice = standardPrice - standardPrice * discountJunior;
  console.log(
    `Il prezzo scontato per minorenni è di ${finalPrice.toFixed(2)}€`
  );
}

// ALTRIMENTI SE passeggero >65
//      -> Applicare sconto over 65
else if (userAge >= 65) {
  finalPrice = standardPrice - standardPrice * discountSenior;
  console.log(`Il prezzo scontato per Over 65 è di ${finalPrice.toFixed(2)}€`);

  // ALTRIMENTI
} else {
  console.log(`Il prezzo del tuo viaggio è di ${finalPrice.toFixed(2)}€`);
}

// Mostrare prezzo finale
