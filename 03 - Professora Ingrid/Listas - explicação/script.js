// como definir variável no javascript: constant, let e var;
//let laranja1 = 3; // denominação moderna
//var laranja2 = 5; // denominação antiga
//const LARANJA3 = 8 // constante

//let e var é possível alterar, mas const não.

//laranja1 = laranja1 + 5;


//laranja3 = 3; não é permitido para constantes.

//console.log(laranja1);
//console.log(laranja2);
//console.log(laranja3);




//length é o tamanho. Não confundir com posição.
// criar uma lista: 
//let n = ["maria, joana, luiza"] ou tb pode ser let n = [1, 2, 3]
// Para alterar algum algum item da lista: nome[julia] = "Maria"
//adicionar item ao final da lista: nome.push("Mariano")
//console.log(nome)

/*criar uma lista com 5 itens;
Alterar o terceiro e quinto item;
Adicionar um sexto item;
Criar uma outra lista com dois itens e unir as duas*/


let comprasMercado = [iogurte, massa, molho, tomate, alho];

comprasMercado[molho] = "tomatesFrescos";
comprasMercado[alho] = "cebola";
comprasMercado.push("coentro");

console.log(comprasMercado);

