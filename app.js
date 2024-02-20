alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Digite um valor entre 1 e 10:");
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}), em ${tentativas} tentativas.`);
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
