// Calcular a média de um aluno. Se média >= 7 " Aprovado", do contrártio, exibir a mensagem "Reprovado"


// // nota > 5 = Recuperação
// let média = prompt()

// if(média >= 7){
//     console.log("Aprovado, CDF!");
// } else if (nota >= 5 ){console.log("Recuperação")
// }
// else {
//     console.log("Reprovado, tapado!")
// }


let nota1 = parseFloat(prompt("Digite sua Nota 01: "));
let nota2 = parseFloat(prompt("Digite sua Nota 02: "));
let nota3 = parseFloat(prompt("Digite sua Nota 03: "));
let nota4 = parseFloat(prompt("Digite sua Nota 04: "));

let media = ((nota1 + nota2 + nota3 + nota4) / 4)


if(media >= 7){
    console.log(`Aprovado! Nota final:${media.toFixed(2)}`);
} else if (media >= 5 ){
    console.log(`Recuperação! Nota final: ${media.toFixed(2)}`)
} else{
    console.log(`Reprovado! Nota final: ${media.toFixed(2)}`);
}