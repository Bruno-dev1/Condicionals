const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
frm.addEventListener("submit",(e)=> {
    e.preventDefault()
    //pegando dados
    const nome = frm.InNome.value
    const nota1 =Number(frm.InNota1.value)
    const nota2 =Number(frm.InNota2.value)
    const media =(nota1+ nota2)/2
    resp1.innerText = `A  Média é ${media}`
    // Criar condição
 if (media>=7)
 {
resp2.innerText =`Parabens ${nome}`
resp2.style.color = "blue"
 }else{
    resp2.innerText=`Você é um fracasso ${nome}`
    resp2.style.color = "red"
 }

    
})