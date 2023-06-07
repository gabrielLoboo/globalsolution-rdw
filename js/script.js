
// document.getElementById("scrollButton").addEventListener("click", function(){
//     var targetSection = document.getElementById("section-ag");
//     targetSection.scrollIntoView({ behavior: "smooth" });
// });

const enviar = document.querySelector("button")
const nome = document.getElementById("nome")

enviar.addEventListener("click", function(){
    if (nome.value === ''){
        alert('Preencha os campos')
    }
});