// ACQUISIZIONE DATI

console.log("Calcola il tuo Biglietto");

// Chiedere numero km
const travelLength = parseFloat(prompt("Inserire il numero di Km del viaggio")); //number
// console.log(`La lunghezza del viaggio è di ${travelLength}`);

// Chiedere età passeggero
const userAge = parseInt(prompt("Inserire l'età del passeggero")); //number
// console.log(`L'età del passeggero è ${userAge}`);

// ELABORAZIONE

// Definire classi di sconto
// let juniorAge = userAge < 18;
// let seniorAge = userAge >= 65;
const discountJunior = 0.2;
const discountSenior = 0.4;

// Definire prezzo standard
const standardPrice = travelLength * 0.21;
// console.log(`Il prezzo standard del viaggio è di ${standardPrice}€`);

if (
  !isNaN(travelLength) &&
  !isNaN(userAge) &&
  travelLength >= 0 &&
  userAge >= 0
) {
  // OUTPUT

  // Calcolo del prezzo
  // let finalPrice = standardPrice;
  // SE passeggero è <18 anni
  //      -> Applicare eventuale sconto minorenni
  // Ricalcolare il prezzo
  // if (userAge < 18) {
  //   finalPrice = standardPrice - standardPrice * discountJunior;
  //   console.log(`Il prezzo standard del viaggio è di ${standardPrice}€`);

  //   console.log(
  //     `Il prezzo scontato per minorenni è di ${finalPrice.toFixed(2)}€`
  //   );
  // }

  // function calculateDiscount(userAge) {}
  // let finalPrice =
  //   userAge < 18
  //     ? `Il prezzo scontato per minorenni è di ${(
  //         standardPrice -
  //         standardPrice * discountJunior
  //       ).toFixed(2)}`
  //     : `Il prezzo del tuo viaggio è di ${standardPrice.toFixed(2)}€`;

  // userAge >= 65
  //   ? `Il prezzo scontato per Over65 è di ${(
  //       standardPrice -
  //       standardPrice * discountSenior
  //     ).toFixed(2)}`
  //   : `Il prezzo del tuo viaggio è di ${standardPrice.toFixed(2)}€`;

  // console.log(finalPrice);

  function calculateFinalPrice(userAge) {
    return userAge < 18
      ? `Il prezzo scontato per minorenni è di ${(
          standardPrice -
          standardPrice * discountJunior
        ).toFixed(2)}`
      : userAge >= 65
      ? `Il prezzo scontato per Over65 è di ${(
          standardPrice -
          standardPrice * discountSenior
        ).toFixed(2)}`
      : `Il prezzo del tuo viaggio è di ${standardPrice.toFixed(2)}€`;
  }

  console.log(calculateFinalPrice(userAge));

  // function exampleFn() {
  //   if (conditionalExpression1) {
  //     return value1;
  //   } else if (conditionalExpression2) {
  //     return value2;
  //   } else if (conditionalExpression3) {
  //     return value3;
  //   } else {
  //     return value4;
  //   }
  // }

  // ALTRIMENTI SE passeggero >65
  //      -> Applicare sconto over 65
  // else if (userAge >= 65) {
  //   finalPrice = standardPrice - standardPrice * discountSenior;
  //   console.log(`Il prezzo standard del viaggio è di ${standardPrice}€`);

  //   console.log(`Il prezzo scontato per Over 65 è di ${finalPrice.toFixed(2)}€`);

  // ALTRIMENTI
  // } else {
  //   console.log(`Il prezzo del tuo viaggio è di ${finalPrice.toFixed(2)}€`);
  // }

  // Mostrare prezzo finale
} else {
  alert("I dati inseriti non sono validi!");
}
