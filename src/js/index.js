const CoracaoAvancar = document.querySelector('.coracaoavancar');
const SobreVoltar = document.querySelector('.sobrevoltar');
const Contato = document.querySelector('.contato');
const Sobre = document.querySelector('.sobre');

CoracaoAvancar.addEventListener('click', function () {
    Contato.classList.remove('nao-selecionado');
    Contato.classList.add('selecionado');
    Sobre.classList.remove('selecionado');
    Sobre.classList.add('nao-selecionado');
    SobreVoltar.classList.remove('selecionado');
    CoracaoAvancar.classList.add('selecionado');

})
SobreVoltar.addEventListener('click', function() {
    Contato.classList.remove('selecionado');
    Contato.classList.add('nao-selecionado');
    Sobre.classList.remove('nao-selecionado');
    Sobre.classList.add('selecionado');
    CoracaoAvancar.classList.remove('selecionado');
    SobreVoltar.classList.add('selecionado');
})