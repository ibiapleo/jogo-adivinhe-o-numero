let numeroSecreto = gerarNumeroAleatorio();
let numeroMaximo = 100;
let tentativas = 1;

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    textoNaTela('h1', 'Jogo do Número Secreto');
    textoNaTela('p', `Escolha um número de 1 a ${numeroMaximo}`);
}

function verificarChute(){
    console.log('Clicou no botão');
    console.log(numeroSecreto);
    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto){
            textoNaTela('h1', 'Parabens! Você acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}!`;
            textoNaTela('p', mensagemTentativas);
            ativarBotaoNovoJogo();        
        } else if(chute > numeroSecreto){
            textoNaTela('p',`O número secreto é menor que ${chute}.`);
            tentativas++;
            limparCampoUsuario();
        } else {
            textoNaTela('p',`O número é maior que ${chute}.`);
            tentativas++;
            limparCampoUsuario();
        }
}

function ativarBotaoNovoJogo(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*100 + 1);
}

function limparCampoUsuario(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampoUsuario();
    tentativas= 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

mensagemInicial();