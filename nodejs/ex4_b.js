const prompt = require("prompt-sync")()
const velocidade = Number(prompt("Insira a velocidade"))
const kilomentragem = Number(prompt("Insira a kilomentragem"))
let mens 
if (velocidade <= kilomentragem){
    mens = "Sem multa"
}
if (velocidade > kilomentragem && velocidade < (kilomentragem*2)){
    mens = "Multa pequena"
}
if (velocidade >= (kilomentragem*2)){
    mens = "Multa grande"
}
console.log(`Aplicar ${mens}`)