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
console.log(`Il prezzo standard delm viaggio è di ${standardPrice}€`);

// OUTPUT

// SE passeggero è <18 anni
//      -> Applicare eventuale sconto minorenni
// Ricalcolare il prezzo

// ALTRIMENTI SE passeggero >65
//      -> Applicare sconto over 65

// Ricalcolare il prezzo

// ALTRIMENTI
// Mostrare prezzo finale
