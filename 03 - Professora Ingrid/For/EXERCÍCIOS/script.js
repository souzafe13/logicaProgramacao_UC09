//Faça um programa que leia cinco números e mostre a soma e a média deles. 

let nValor = 0;

for (var i = 1; i <= 5; i++) {
    let valor = parseFloat(prompt());

        nValor += valor;
}
console.log(`Soma será: ${nValor}`);
console.log(`Média será: ${nValor/i}`);

  //nValor +=valor (mesma maneira de colocar nValor = nValor + valor;)