const botaoLote = document.querySelector(".botao-lote");
const divEstudante = document.querySelector(".estudante");
const divLote = document.querySelector(".lote");
const formInscricaoLote = document.querySelector(".form-inscricao-lote");
const formInscricaoEstudante = document.querySelector(
  ".form-inscricao-estudante"
);
const botaoMailchimp = document.querySelector("#mc-embedded-subscribe");
const linkPagamentoLote = document.querySelector(".link-pagamento-lote");
const email = document.querySelector("#mce-EMAIL");
const botaoEstudante = document.querySelector(".botao-estudante");
const botaoConvidadoRob = document.querySelector(
  ".convidados__mais-info--roberio"
);
const botaoConvidadoLeland = document.querySelector(
  ".convidados__mais-info--leland"
);
const botaoConvidadoMaria = document.querySelector(
  ".convidados__mais-info--maria"
);
const botaoConvidadoFabiana = document.querySelector(
  ".convidados__mais-info--fabiana"
);
const cvRoberio = document.querySelector(".convidados__cv-roberio");
const cvLeland = document.querySelector(".convidados__cv-leland");
const cvMaria = document.querySelector(".convidados__cv-maria");
const cvFabiana = document.querySelector(".convidados__cv-fabiana");

botaoLote.addEventListener("click", mostrarFormInscricaoLote);
botaoEstudante.addEventListener("click", mostrarFormInscricaoEstudante);

botaoMailchimp.addEventListener("click", mostrarLinkPagamento);

botaoConvidadoRob.addEventListener("click", maisInformacoes);
botaoConvidadoLeland.addEventListener("click", maisInformacoesLeland);
botaoConvidadoMaria.addEventListener("click", maisInformacoesMaria);
botaoConvidadoFabiana.addEventListener("click", maisInformacoesFabiana);

function mostrarFormInscricaoLote() {
  divLote.style.display = "none";
  formInscricaoLote.style.display = "block";
}

function mostrarLinkPagamento() {
  if (email.value.length >= 5) {
    formInscricaoLote.style.display = "none";
    linkPagamentoLote.style.display = "flex";
    linkPagamentoLote.scrollIntoView();
  }
}

function mostrarFormInscricaoEstudante() {
  divEstudante.style.display = "none";
  formInscricaoEstudante.style.display = "block";
}

function maisInformacoes() {
  cvRoberio.style.display === "block"
    ? (cvRoberio.style.display = "none")
    : (cvRoberio.style.display = "block");
}

function maisInformacoesLeland() {
  cvLeland.style.display === "block"
    ? (cvLeland.style.display = "none")
    : (cvLeland.style.display = "block");
}

function maisInformacoesMaria() {
  cvMaria.style.display === "block"
    ? (cvMaria.style.display = "none")
    : (cvMaria.style.display = "block");
}

function maisInformacoesFabiana() {
  cvFabiana.style.display === "block"
    ? (cvFabiana.style.display = "none")
    : (cvFabiana.style.display = "block");
}