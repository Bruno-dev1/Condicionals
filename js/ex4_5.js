const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.InNum.value)
    let raíz = Math.sqrt(num)
    if (Number.isInteger(raíz)){
        resp.innerText = `A raíz quadrada de ${num} é ${raíz}`
    }else{
        resp.innerText = `Não existe raíz quadrada exata de ${num}`
    }

})