const frm = document.querySelector("form")
const tempo = document.querySelector("#outTime")
const troco = document.querySelector("#outTroco")
frm.addEventListener("submit",(e)=>{
     e.preventDefault()
    const time = Number(frm.inPreco.value)
    let esta
    let resto   
    if( time<1){
        tempo.innerText = "Valor invalido"
        return
    } else if(time => 1 && time <= 1.75)
    {
        esta = 30
        resto = Math.abs( time - 1)
    }else if (time > 1.5 && time <3)
        {
            esta = 60
            resto = Math.abs(time - 1.5)
        }else  if (time = 3){
            esta = 120
            resto = 0
        }
    tempo.innerText = `tempo de estacionamento ${esta} minutos`
    troco.innerText = ` troco de R$${resto.toFixed(2)}`

})
