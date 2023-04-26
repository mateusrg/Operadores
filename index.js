idade = Number(prompt("Quantos anos você tem?"))
idadeAmigo = Number(prompt("Quantos anos seu/sua melhor amigo(a) tem?"))
console.log("Sua idade é maior do que a do(a) seu/sua melhor amigo(a)?", idade > idadeAmigo)
console.log("Diferença das idades:", idade - idadeAmigo)

num = prompt("Insira um número par")
console.log("Resto da divisão desse número por 2:", num%2)

// Quando par, o resto é sempre 0. Quando ímpar, o resto é sempre 1.

console.log("Em meses:", idade*12)
console.log("Em dias:", idade*365)
console.log("Em horas:", idade*8760)

num1 = Number(prompt("Primeiro Número"))
num2 = Number(prompt("Segundo Número"))
console.log("O primeiro número é maior que o segundo?", num1 > num2)
console.log("O primeiro número é igual ao segundo?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo?", num1 % num2 === 0)

// Desafio

console.log("77 ºF equivale a ", (77-32) * (5/9) + 273.15, "K")
console.log("80 ºC equivale a ", 80 * (9/5) + 32, "ºF")
console.log("30 ºC equivale a", 30 * (9/5) + 32, "ºF e a", 30 + 273.15, "K")
Celsius = prompt("Insira uma temperatura em ºC para converter para ºF e K")
console.log(Celsius, "ºC equivale a", Celsius * (9/5) + 32, "ºF e a", Celsius + 273.15, "K")

console.log("Uma casa que consome 280 quilowatt-hora paga R$", 280 * 0.05)
console.log("Uma casa que consome 280 quilowatt-hora e recebe 15% de desconto paga R$", 0.15 * 280 * 0.05)