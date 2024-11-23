const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const saque = Number(frm.InSaque.value)
    if(saque % 10 != 0){
        alert("Valor inválido")
        frm.InSaque.focus()
        return
    }
    const cem = Math.floor(saque/100)
    let resto =saque%100
    const cinquenta = Math.floor(resto/50)
    resto = resto%50
    const dez = Math.floor(resto/10)
    if (cem > 0){
        resp1.innerText = `Notasde 100R$ ${cem}`
    }
    if (cinquenta > 0){
        resp2.innerText = `Notas de 50R$ ${cinquenta}`
    }
    if (dez > 0){
        resp3.innerText = `Notas de 10R$ ${dez}`
    }
})