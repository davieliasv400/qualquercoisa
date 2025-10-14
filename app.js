let numerosecreto = gerarNumeroAleatorio();

function exibirtextonatela (tag, texto){
    let chute = document.querySelector('input').value;
    
    if (chute == numerosecreto) {
        exibirtextonatela('h1', ' acertou');
        let palavratentativa = tentativas > 1 ? 'tentativas' :
        'tentativa';
        let mensagemtentativas = 'voce descobriu o numero secreto com'
    }
}

exibirtextonatela('h1', 'jogo do numero secreto');
exibirtextonatela('p', 'escolha um numero entre 1 e 10');

function verificarchute(){
    let chute = documen.querySelector('input').value;
    console.log(chute == numerosecreto);
}

function gerarNumeroAleatorio(){
    return perseint(Math.random() * 10 + 1);
}



