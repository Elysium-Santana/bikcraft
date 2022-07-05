const links = document.querySelectorAll(".header-menu a");

function selecao(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(selecao);

//======adicionando elementos a url para alterar inputs ta proxima pagina=====

const parametros = new URLSearchParams(location.search);

function ativarselecao(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarselecao);

//===============ocultar conteudo de perguntas frequentes=============

const respostas = document.querySelectorAll(".perguntas button");
function eventoocultar(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventoclicar(resposta) {
  resposta.addEventListener("click", eventoocultar);
}
respostas.forEach(eventoclicar);

// =============ordenando foto em primero lugar============

const galeriaconteiner = document.querySelector(".bike-imagens");
const galeriaimagens = document.querySelectorAll(".bike-imagens img");
function eventoclick(evento) {
  const selecionada = evento.currentTarget;
  const media = matchMedia("(min-width:476px)").matches;
  console.log(media);
  if (media) {
    galeriaconteiner.prepend(selecionada);
  }
}

function clicarimagens(imagem) {
  imagem.addEventListener("click", eventoclick);
}

galeriaimagens.forEach(clicarimagens);

//animaçao
if (window.SimpleAnime) {
  new SimpleAnime();
}
