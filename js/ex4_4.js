const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>
    {
        e.preventDefault()
        const brasil=Number(frm.InHorario.value)
        let frança = brasil + 5
        if (frança> 24)

        {
                frança= frança-24
        }
        resp.innerText = `O horaio na frança agora é ${frança.toFixed(2)}`
})