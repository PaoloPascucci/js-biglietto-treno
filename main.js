const UserAge = prompt("Quanti anni hai?")
const UserKm = prompt("Quanti chilometri devi fare?")


let ticket_price = "Il prezzo é: " + (0.21 * UserKm).toFixed(2) + " €";

if (UserAge <= "17") {

    var final_price = "Il prezzo scontato é: " + ((0.21 * UserKm) - (((0.21 * UserKm) * 20) / 100)).toFixed(2) + " €"

    console.log(final_price);

}
else if (UserAge >= "65") {

    var final_price = "Il prezzo scontato é: " + ((0.21 * UserKm) - (((0.21 * UserKm) * 40) / 100)).toFixed(2) + " €"

    console.log(final_price);
}
else {
    var final_price = ticket_price;

    console.log(final_price);
}


document.getElementById('testo').innerHTML = final_price;
