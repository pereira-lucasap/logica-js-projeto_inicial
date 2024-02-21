alert("Boas vindas ao jogo do número secreto!");

let desafio = 10;
let numeroSecreto = parseInt(Math.random() * desafio + 1); //gera um número aleatório entre 0 e 9, inclusive
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um valor entre 1 e ${desafio}:`);
    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        };
        tentativas++;
    };
};

let finalWord = tentativas > 1 ? ' tentativas' : ' tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${finalWord}.`);
