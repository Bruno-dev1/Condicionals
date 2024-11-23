const prompt = require("prompt-sync")()
const numb = Number(prompt("Insira um número"))
let resp

if(Number.isInteger(numb)){
    resp = "par"    
}else{
    resp = "impar"
}

console.log(resp)