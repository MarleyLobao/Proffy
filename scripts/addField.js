function cloneField(){ //função que duplica a quantidade de campos de horário
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    const fields = newFieldsContainer.querySelectorAll("input")

    //limpa os campos preenchidos da cópia
    fields.forEach((field) => {
        field.value = ""
    })

    //coloca a cópia no local da página especificado
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}