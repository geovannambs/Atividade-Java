var termos = prompt("Digite a quantidade de termos")

var numero = ""
var soma = 0
var texto = ""

for (var i = 1; i <= termos; i++) {

numero = numero + "1"
soma = soma + Number(numero)

texto = texto + numero

if (i < termos) 
  {
    texto = texto + " + "
  }

}

console.log(texto)
console.log("A soma da quantidade de termos é: " + soma)