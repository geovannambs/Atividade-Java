var jogador = prompt("Escolha: pedra, papel ou tesoura")

var decisao = Math.floor(Math.random() * 3)

var computador

if (decisao == 0) {
    computador = "pedra"
} else if (decisao == 1) {
    computador = "papel"
} else {
    computador = "tesoura"
}

console.log("Você escolheu: " + jogador)
console.log("O Computador escolheu: " + computador)

if (jogador == computador) {
    console.log("Empate")
}
else if (jogador == "pedra" && computador == "tesoura") {
    console.log("Você ganhou")
}
else if (jogador == "papel" && computador == "pedra") {
    console.log("Você ganhou")
}
else if (jogador == "tesoura" && computador == "papel") {
    console.log("Você ganhou")
}
else {
    console.log("Computador ganhou")
}