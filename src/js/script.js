
const cardSelecionado = document.querySelectorAll(".personagens");
cardSelecionado.forEach((personagens) => {
  personagens.addEventListener("mouseover", () => {

    if(window.innerWidth < 450){
      window.scrollTo({top: 0, behavior: "smooth"});
    }

    removerSelecaoDoPersonagem();

    personagens.classList.add('selecionado');

    const idPersonagem = alterarImagemPersonagemSelecionado(personagens);

    alterarNomePersonagemSelecionado(idPersonagem);

    alterarDescricaoPersonagemSelecionado(personagens);
  })
});


function alterarDescricaoPersonagemSelecionado(personagens) {
  const descricaoPersonagemGrande = document.getElementById("descrição-do-personagem");
  descricaoPersonagemGrande.innerText = personagens.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(idPersonagem) {
  const nomePersonagemGrande = document.getElementById('nome-do-personagem');
  nomePersonagemGrande.innerText = idPersonagem;
}

function alterarImagemPersonagemSelecionado(personagens) {
  const personagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagens.attributes.id.value;
  personagemGrande.src = `/project-X-men/src/images/card-${idPersonagem}.png`;
  return idPersonagem;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
