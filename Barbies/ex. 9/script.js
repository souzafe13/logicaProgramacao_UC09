/*9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.*/


let num1 = Number(prompt("digite o primeiro número: "));
let num2 = Number(prompt("digite o segundo número: "));

let operacao = (prompt("Selecione a operação que deseja realizar:\n Multiplicação (*)\n Divisão (/)\n Subtração (-) \n Adição "));
let resultado;

switch (operacao){
  case "Multiplicação":
    resultado =  num1 * num2
  break;
  case "Divisão":
    resultado =  num1 / num2
  break;
  case "Subtração":
    resultado =  num1 - num2
  break;
  case "Adição":
    resultado =  num1 + num2
  break;
  default:
  resultado = "Operação inválida"
}
  console.log(resultado)
