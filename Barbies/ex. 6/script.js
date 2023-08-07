/*6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.*/

let letras = prompt("Digite uma letra:");

if(letras == "a" || letras == "e"|| letras == "i"|| letras == "o"|| letras == "u"){
    console.log("A letra é uma vogal")
} else {
    console.log("A letra é uma consoante")
}