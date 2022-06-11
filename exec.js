const inputPergunta = document.querySelector("#inputPergunta")
const respostaElement = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Com certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem que não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
]

function fazerPergunta() {
    if (inputPergunta.value == "") {
        alert("Digite a sua pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = `<div> ${inputPergunta.value} </div>`
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
    console.log(respostas[numeroAleatorio])
    
    respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

    respostaElement.style.opacity = 1;
    
    setTimeout(function() {
        respostaElement.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}