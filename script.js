const botaoLote = document.querySelector('.botao-lote');
const divEstudante = document.querySelector('.estudante');
const divLote = document.querySelector('.lote');
const formInscricaoLote = document.querySelector('.form-inscricao-lote')
const formInscricaoEstudante = document.querySelector('.form-inscricao-estudante')
const botaoMailchimp = document.querySelector('#mc-embedded-subscribe')
const linkPagamentoLote = document.querySelector('.link-pagamento-lote')
const email = document.querySelector('#mce-EMAIL')
const botaoEstudante = document.querySelector('.botao-estudante')

botaoLote.addEventListener('click', mostrarFormInscricaoLote )
botaoEstudante.addEventListener('click', mostrarFormInscricaoEstudante )

botaoMailchimp.addEventListener('click', mostrarLinkPagamento)

function mostrarFormInscricaoLote() {
    divLote.style.display = 'none';
    formInscricaoLote.style.display = 'block'
}

function mostrarLinkPagamento() {
    if(email.value.length >= 5) {
        formInscricaoLote.style.display = 'none';
        linkPagamentoLote.style.display = 'flex';
        linkPagamentoLote.scrollIntoView();
    }

}

function mostrarFormInscricaoEstudante() {
    divEstudante.style.display = 'none';
    formInscricaoEstudante.style.display = 'block'
}
