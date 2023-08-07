
// let diaDaSemana = parseInt(prompt("Digite um número"));


// switch(diaDaSemana){
//      case 1:
//      console.log("Segunda-feira")
//      break;   
 

//      case 2:
//      console.log("Terça-feira")
//      break;  

    
//      case 3:
//      console.log("Quarta-feira")
//      break;  

   
//      case 4:
//      console.log("Quinta-feira")
//      break;  

  
//      case 5:
//      console.log("Sexta-feira")
//      break;  

//      default:

//      console.log("Fim de semana")

// }

// *****Comandos******
// Ctrl D: Seleciona todas as palavras iguais (facilita para exclusão);
// Shift + Alt + Seta para baixo: Amplia as linhas;
// Ctrl S: Salvar no VS;
// F5: Atualizar informações;
// Shift + Alt + Seta pra baixo: Copia/replica a linha para baixo;
// Ctrl + ponto e vírgula: Abre anotação que não alterará as funções.
// Obs.: para porcentangem, replicar regra de três. Ex.: 
// 35*0.25
// um sinal de igual = é "receber". 
// dois sinais de igual == é a função matemática igual
// três sinais de igual === ...
// se colocar "//", já abre as anotações.
//colocar duas vezes && (pq sim rsrsrs)
// para representar "ou" || pipe
//Exclamação na frente: Inverte o resutado Ex.: "!true". A exclamação torna o texto a seguir diferente, ou seja, se tornará falso.
// para perguntar no prompt, fazer ele igual ao resultado da variável. Ex.: let nomeDaFruta = prompt();Assim, perguntará no prompt.
//***//engrenagem>settings>digitar> wrap> selecionar "on". Irá quebrar as linhas automaticamente.

// let nomeDaFruta = prompt();
// switch (nomeDaFruta) {
//   case "banana": 
//   case "laranja":
//     console.log("Estas frutas são cítricas")
//   break;
//   case "abacate":
//   case "manga":
//     console.log("Estas frutas são tropicais")
//   break;
//  default:
//     console.log("Não sei que tipo de fruta é essa")   

// }
   
//crie um programa que que solicite ao usuário que insira dois números e selecione uma operação (soma, subtração, multiplicação ou divisão). Use o swuitch para selecionar a operação apropriada com base na entrada do usuário e exiba o resultado no console.



// let num1 = parseInt(prompt("Insira um número: "));
// let num2 = parseInt(prompt("digite o segundo número: "));

// let operacao = prompt("Selecione uma operação: \n soma (+)\n subtração (-) \n divisão (/) \n multiplicação (*)");

// let resultado

// switch (operacao){
//     case  "+": 
//     resultado = num1 + num2;
//     break;
//     case  "-": 
//     resultado = num1 - num2;
//     break;
//     case  "*": 
//     resultado = num1 * num2;
//     break;
//     case  "/": 
//     resultado = num1 / num2;
//     break;
//     default:
//         resultado = "operação inválida";
// } 
// console.log(resultado);

/**

 * Escreva um programa em JavaScript que solicite ao usuário que insira um número e verifique se ele é positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir "O número é positivo". Se o número for menor que zero, o programa deve exibir "O número é negativo". Se o número for igual a zero, o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".

Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:

Solicitar ao usuário que insira um número.

Verificar se o número é positivo, negativo ou zero utilizando um switch statement.

Exibir a mensagem correspondente ao tipo de número.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

 */

//  


// switch (true){
//     case  (valor1 > 0):   
//      console.log("O número é positivo ");
//       break;
//     case (valor1 < 0):
//         console.log("o número é negativo");
//       break;
//     case (valor1 == 0):
//         console.log("O número é zero");
//       break;
//      default:
//         console.log("Entrada inválida");
// }        
    
// Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente ao dia da semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".
// Para implementar a verificação do nome do dia da semana, utilize um switch statement. O programa deve seguir a seguinte estrutura:
// Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).
// Verificar qual é o número inserido pelo usuário e exibir o nome do dia da semana correspondente utilizando um switch statement.
// Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
// tem menu de contexto
   
// let diaDaSemana = parseInt(prompt("Digite um número que corresponda a um dia da semana, entre 1 e 7:"));


// switch(diaDaSemana){

//      case 1:
//      console.log("Domingo, pede cachimbo")
//      break;  

//      case 2:
//      console.log("Segunda-feira, ninguém merece")
//      break;   
 

//      case 3:
//      console.log("Terça-feira, buáaa")
//      break;  

    
//      case 4:
//      console.log("Quarta-feira, credo, que delícia")
//      break;  

   
//      case 5:
//      console.log("Quinta-feira, tá quase")
//      break;  

  
//      case 6:
//      console.log("Hoje é sexta-feira, graças a Deus: by Chico Pinheiro")
//      break;  

//      case 7:
//      console.log("Sábadouuuuu")
//      break;  

//      default:
//         alert("Não corresponde a um dia da semana");

// }
// ************************************* revisão****************************************

/*
01 -Declarar a variável "idade" com o valor 15.
Verificar se a idade é maior ou igual a 18 utilizando uma estrutura condicional (if statement).
Se a idade for maior ou igual a 18, imprimir no console a mensagem "Pode entrar!".
Caso contrário, não imprimir nada.*/

// let idade = 15
// idade = prompt("digite sua idade")
//  if(idade >=18){
//     alert("Pode entrar");
 /* } 

/*
02 -  Escreva um programa em JavaScript que declare uma constante "nome" com o valor "Ana".
Em seguida, utilize uma estrutura condicional if para verificar se o valor da constante "nome" é igual a "Ana". Caso seja, imprima no console a mensagem "Olá Ana, tudo bem?" utilizando o recurso de template literals para interpolar a variável "nome" na mensagem.*/


// const nome = "Ana";

// if(nome == "Ana"){
//     console.log(`Olá ${nome}, tudo bem?`)
// }

// 03 - Escreva um programa em JavaScript que declare uma constante "num" com o valor 18.
// Em seguida, utilize a função Math.pow() para calcular e imprimir no console o valor de 2 elevado ao quadrado (2²), 3 elevado ao quadrado (3²) e "num" elevado ao quadrado ("num"²).
// */

// const num = 18;
// let potencia1 = Math.pow(2,2);
// console.log(potencia1)

// let potencia2 = Math.pow(3,2);
// console.log(potencia2)

// let potencianum = Math.pow(num,2);
// console.log(potencianum)
 
/* 04 - Imagine que alguém está dirigindo um carro em uma estrada, cujo limite de velocidade é de 80 km/h. Se essa pessoa estiver dirigindo a 55 km/h, não há problema e ela não receberá uma multa por excesso de velocidade. No entanto, se ela estiver dirigindo a uma velocidade maior que 80 km/h, ela será multada.
*//*O programa em JavaScript simula essa situação, verificando se a velocidade do veículo é maior que 80 km/h e imprimindo a mensagem "Levou multa" caso seja, ou "Não levou multa" caso contrário. Isso pode ser útil para os motoristas se conscientizarem sobre a importância de respeitar os limites de velocidade e evitar multas e acidentes.
*/
// let velocidade = prompt ("Qual é a sua velocidade?")

// if(velocidade <= 55){
//     alert("Não será multado!");
// } else {
//     alert("Você será multado!")
// }
 
 
/* 05 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 23 e uma variável "cnh" com o valor false.
 
Em seguida, utilize uma estrutura condicional if-else-if para verificar se a idade é maior ou igual a 18 e se a pessoa possui CNH. Caso ambas as condições sejam verdadeiras, imprima no console a mensagem "Sim, pode dirigir".
 
Caso a idade seja maior ou igual a 18 mas a pessoa não possui CNH, imprima no console a mensagem "Não pode dirigir, mas pode fazer a CNH".
 
Caso contrário, ou seja, se a pessoa tiver menos de 18 anos, imprima no console a mensagem "Não pode dirigir".
 
Certifique-se de que a estrutura condicional esteja completa, com o uso das chaves {} para delimitar o bloco de código a ser executado em caso de cada condição.
*/
// let idade = 23;
// let cnh = false;

// if( idade >= 18 && cnh == "true"){
//     console.log(`Com a idade de ${idade}, você pode dirigir`);
// }


 
/* 06 - Escreva um programa em JavaScript que utilize a estrutura de repetição while para imprimir no console os números de 0 a 10.
 
Certifique-se de utilizar uma variável de controle "i" inicializada em 0 e incrementada em 1 a cada iteração, verificando se o valor de "i" é menor ou igual a 10 para evitar um loop infinito. Utilize a função console.log() para imprimir os valores de "i" em cada iteração do loop.
*/
/*
let i = 0;
while (i < 10){
    i++
    console.log(i)
}*/
 
// 07 - Crie um programa em Javascript que conte de 100 até 50 em ordem decrescente e imprima cada número no console. Utilize um laço de repetição for para realizar essa tarefa.

/*
for(i = 100; i >= 50; i--){
    console.log(i)
}*/
 
/* 08 - Crie um programa em Javascript que conte de 0 até 50 e imprima no console se cada número é par ou ímpar. Utilize um laço de repetição for para percorrer cada número de 0 a 50 e utilize uma estrutura condicional if...else para verificar se o número é par ou ímpar. Caso o número seja par, o programa deve imprimir a mensagem "O número X é par", onde X é o número em questão. Caso o número seja ímpar, o programa deve imprimir a mensagem "O número X é ímpar". */

// for (x = 0; x <= 50; x++){

//     if(x % 2 === 0) {
//     console.log(`Este número ${x} é par`);
//     } else if (x % 2 !== 0) {
//         console.log(`Este número ${x} é ímpar`);
//     }
// }


 
/* 09 - Crie um programa em Javascript que verifique se um número é primo ou não. O número a ser verificado deve ser armazenado em uma variável chamada num. O programa deve contar quantas divisões exatas o número tem utilizando um laço de repetição for que percorre todos os números de 1 até o próprio número. Caso o número seja divisível por um desses números, aumenta-se o valor da variável divisoes. Ao final do laço, utiliza-se uma estrutura condicional if...else para verificar se o número é primo ou não. Se o número tiver exatamente duas divisões exatas (1 e ele mesmo), o programa deve imprimir a mensagem "O número X é primo", onde X é o número em questão. Caso contrário, o programa deve imprimir a mensagem "O número X não é primo".*/

let num 