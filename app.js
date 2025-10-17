let listadenumerossorteados = [];
let numerolimite = 10;
let numerosecreto = gerarNumeroAleatorio()
let tentativas = 1;

function exibirtextonatela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsivevoice.speak(texto, 'brazilian portuguese female', {rate:1.2});
}

function exibirtextonatela() {
    exibirtextonatela('h1', 'jogo do numero secreto');
    exibirtextonatela('p', 'escolha um numero entre 1 e 10');
}

function verificarchute(){
    let chute = documen.querySelector('input').value;

    if(chute == numerosecreto) {
        exibirtextonatela('h1', 'acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemtentativas = `voce descobriu o numero secreto com ${tentativas} ${palavratentativa}!`;
        exibirtextonatela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto) {
            exibirtextonatela('p', 'o numero secreto e menor');
        } else {
            exibirtextonatela('p', 'o numero secreto e maior');
        }
        tentativas++;
        
    }
}






function gerarNumeroAleatorio(){
    return perseint(Math.random() * 10 + 1);
}



