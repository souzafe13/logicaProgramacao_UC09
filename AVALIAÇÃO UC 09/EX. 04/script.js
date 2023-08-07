/*Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. */
let nomeDoAluno = (prompt("Insira seu nome:"))
let nota1 = Number(prompt("insira a primeira nota:"));
let nota2 = Number(prompt("insira a segunda nota:"));
let nota3 = Number(prompt("insira a terceira nota:"));
let nota4 = Number(prompt("insira a quarta nota:"));

let mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4)
console.log(`A média final é ${mediaFinal}`)
if(mediaFinal >= 7){
    alert(`Com média final de ${mediaFinal}, ${nomeDoAluno} você está aprovado (a)!`)
} else if (mediaFinal >= 6){
    alert(`Com média final de ${mediaFinal}, ${nomeDoAluno} você está de recuperação"`)
} else {
    alert(`Com média final de ${mediaFinal}, ${nomeDoAluno} você está reprovado (a)!`)
}

