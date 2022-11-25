function myFirstFunction() {
  console.log("Função");
}

// execute
myFirstFunction();

function sum(number1, number2) {
    console.log(number1 + number2)

}
// number1 = 32 e number2 = 24
sum(32, 24)

function myFirstFunctionWithReturn(num1, num2){
    let total = num1 + num2
    return total

}
console.log(myFirstFunctionWithReturn(20,20))

function meuPratoDeComida(comida1, comida2, comida3, comida4) {
    return`Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`
}
const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita') 
console.log(prato)

// Arrow Functions ->
const myFirstArrowFunction = (number1, number2) => {
    let total = number1 + number2 
    return total
}
const result = myFirstArrowFunction(20,20)
console.log(result)
