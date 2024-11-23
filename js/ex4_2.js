const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Aperto de botao
frm.addEventListener("submit",(e)=>
{
    e.preventDefault()//e se refere a addEventListener
    const name = frm.InName.value
    const genero = frm.InMale.checked
    const altura = Number(frm.InAltura.value)
//Calculo do IMC
    let peso
if(genero)
{
    peso = 22* Math.pow(altura,2)//Math eleva o numero
}else{
    peso = 21* Math.pow(altura,2)//Math eleva o numer
}
resp.innerText = `${name} seu peso ideal é ${peso.toFixed(3)} `
})
frm.addEventListener("reset",()=>
resp.innerText= ""
)