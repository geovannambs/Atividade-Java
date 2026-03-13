var numero = Math.floor(Math.random() * 20) + 1
var x = 0

while ( x != numero) {

chute = prompt("Advinhe o número de 1 a 20")

    if (x > numero) {
        console.log("O número é menor")
    } else if (x < numero) {
        console.log("O número é maior")
    } else {
        console.log("Você acertou! O número era " + numero)
    }

}