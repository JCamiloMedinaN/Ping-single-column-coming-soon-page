const email = document.getElementById("email")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e =>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let entrar
    if (email.value.length == 0) {
        warnings += "Please enter an email"
        entrar = true
    }else if(!regexEmail.test(email.value)){
        warnings += "Please provide a valid email address"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})