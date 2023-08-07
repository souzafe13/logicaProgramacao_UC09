
let comprasMercado = ["iogurte, massa, molho, tomate, alho"];

comprasMercado[2] = "tomatesFrescos";
comprasMercado[5] = "cebola";
comprasMercado.push("coentro");

console.log(comprasMercado);


let comprasVendinha = ["frutas", "legumes"];
const comprasDoMes  = comprasMercado.concat(comprasVendinha)
console.log(comprasDoMes);
