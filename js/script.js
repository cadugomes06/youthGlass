//ativar links do Menu
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