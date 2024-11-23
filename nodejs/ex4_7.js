const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Quantas pessoas?"))
const peixes = Number(prompt("Quantos peixes?"))
let pagar
if(peixes<= pessoas){
    pagar = pessoas* 20
}else{
    pagar = (pessoas*20) + ((peixes-pessoas)*12)
}
console.log(`Total a pagar: ${pagar.toFixed(2)}`)