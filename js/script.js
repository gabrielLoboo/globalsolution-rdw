document.getElementById("scrollButton").addEventListener("click", function(){
    var targetSection = document.getElementById("section-ag");
    targetSection.scrollIntoView({ behavior: "smooth" });
});


const assunto = document.getElementById("assunto")
const email = document.getElementById("email")
const mensagem = document.getElementById("mensagem")

document.querySelector("button").addEventListener("click", function(){
    if (validaCampos()){
        alert('Por favor, preencha os campos pedidos!')
    } else{
        alert('Mensagem enviada com sucesso!')
    }
});

function validaCampos(){
    return nome.value === '' || assunto.value === ''|| email.value === '' || mensagem.value === '';
}
