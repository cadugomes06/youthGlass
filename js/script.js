//ativar linkss do Menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;

   if  (url.includes(href)) {
    link.classList.add('ativo')
   }
}
links.forEach((ativarLink))

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametros) {
    const element = document.getElementById(parametros)
    if (element) {
        element.checked = true
    }
}
parametros.forEach((ativarProduto))

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
   const pergunta =  event.currentTarget
   const controls = pergunta.getAttribute('aria-controls')
   const resposta = document.getElementById(controls)

   resposta.classList.toggle('ativo')
   const ativo = resposta.classList.contains('ativo')
   pergunta.setAttribute('aria-expanded', ativo)
}

function eventosPergunta(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}
perguntas.forEach(eventosPergunta)



// Galeria de óculos
const galeria = document.querySelectorAll('.oculos-imagens img')
const galeriaContainer = document.querySelector('.oculos-imagens')

function trocarImagem(event) {
    const img = event.currentTarget
    galeriaContainer.prepend(img)
    console.log(img)
}

galeria.forEach((img) => {
    img.addEventListener('click', trocarImagem)
})