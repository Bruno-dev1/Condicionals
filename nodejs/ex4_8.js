const prompt = require("prompt-sync")()
const compra = Number(prompt("Quanto o total da compra?"))
const aux = Math.floor(compra/20)
const pagare = aux == 0 ?  1 : aux > 6 ? 6 : aux
const parcel =compra/pagare
console.log(`Pode pagar em ${pagare}x de ${parcel.toFixed(2)}`)