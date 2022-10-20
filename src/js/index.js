//primeira forma: feita por mim sozinha sem estudar

/*const coracaoAvancar = document.querySelector('.coracaoavancar');
const sobreVoltar = document.querySelector('.sobrevoltar');
const contato = document.querySelector('.contato');
const sobre = document.querySelector('.sobre');

CoracaoAvancar.addEventListener('click', function () {
    contato.classList.remove('nao-selecionado');
    contato.classList.add('selecionado');
    sobre.classList.remove('selecionado');
    sobre.classList.add('nao-selecionado');
    sobreVoltar.classList.remove('selecionado');
    coracaoAvancar.classList.add('selecionado');

})
SobreVoltar.addEventListener('click', function() {
    contato.classList.remove('selecionado');
    contato.classList.add('nao-selecionado');
    sobre.classList.remove('nao-selecionado');
    sobre.classList.add('selecionado');
    coracaoAvancar.classList.remove('selecionado');
    sobreVoltar.classList.add('selecionado');
})*/

//segunda forma: depois de assistir a mapadevweek

const abas = document.querySelectorAll('.aba');

function selecionarAba(aba){
    const abaSelecionada =document.querySelector('.aba.selecionado');
    abaSelecionada.classList.remove('selecionado');
    aba.classList.add('selecionado');
}

function mostrarInformacoesDaAba(aba){
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    const informacaoSelecionada = document.querySelector('.informacao.selecionado');
    informacaoSelecionada.classList.remove('selecionado');
    informacaoASerMostrada.classList.add('selecionado');
}

abas.forEach((aba)=>{
    aba.addEventListener('click', function () {
        if(aba.classList.contains('selecionado')) return;
        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);
    });
});
