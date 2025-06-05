let prompt = require('prompt-sync')();

console.log("Bem vindo  compania do samuel airlines")
console.log("")
console.log("Nossa empresa vai oferecer os melhores preços de viagens para o desino dos seus sonhos para que você possa aproveitar o melhor momento da sua vida")
console.log("")
let login = prompt("Digite seu nome:");

console.log("Para onde você deseja ir?")


let lugar = "Nova York"
let lugar2 = "Xique Xique"
let lugar3 = "Dinamarca"
let lugar4 = "Canadá"

console.log("1 - Nova York")
console.log("2 - Xique Xique")
console.log("3 - Dinamarca")
console.log("4 - Canadá")

let resposta = prompt("Digite o número da opção desejada: ")

if (resposta == 1) {
    console.log("Você escolheu: " + lugar)
}
if (resposta == 2) {
    console.log("Você escolheu: " + lugar2)
}
if (resposta == 3) {
    console.log("Você escolheu: " + lugar3)
}
if (resposta == 4) {
    console.log("Você escolheu: " + lugar4)
}