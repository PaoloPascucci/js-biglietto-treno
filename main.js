const UserAge = prompt("Quanti anni hai?")
const UserKm = prompt("Quanti chilometri devi fare?")

console.log(UserAge + UserKm)

let ticket_price = "Il prezzo é:" + (0.21 * UserKm) + "€"

console.log(ticket_price)

if (UserAge <= "17") {

    var final_price = "Il prezzo scontato é:" + ((0.21 * UserKm) - (((0.21 * UserKm) * 20) / 100)) + "€"

    console.log(final_price)
}
else if (UserAge >= "65")

    var final_price = "Il prezzo scontato é:" + ((0.21 * UserKm) - (((0.21 * UserKm) * 40) / 100)) + "€"

console.log(final_price)
