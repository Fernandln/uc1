// 1. Construir uma página para uma empresa de serviços. O operador irá
// digitar o salário de um cliente. Se o salário for maior ou igual que R$
// 3.000,00, o programa irá escrever na tela "Oferecer Plano Alfa" e, caso seja
// menor, o programa escreverá "Oferecer Plano Beta".

// let salarioCliente = parseFloat(prompt("Digite o salario do cliente"))
// if (salarioCliente >= 3000 ) {
//    document.write("Oferecer Plano alfa")
// }
// else if(salarioCliente <= 2999) {
//    document.write("Oferecer Plano Beta")
// }

// else {
//    document.write("Digite um numero valido");
// }







// 2. Construir um programa onde o usuário saberá o valor do seu colesterol.
// Caso o valor seja menor ou igual que 180, o programa irá escrever na tela
// "Saúde Ok"; caso contrário, o programa escreverá na tela "Vamos procurar uma ajuda médica?"


let colesterol = parseFloat(prompt("Digite o seu colesterol"))
if (colesterol <= 180 ) {
   document.write("Saúde Ok")
}
else if(colesterol >= 181) {
   document.write("Vamos procurar uma ajuda médica?")
}
else {
   document.write("Digite um valor valido")
   
}



// 3. Construir um programa onde um vendedor irá digitar quanto ele vendeu
// em um mês na loja. Caso esse total de vendas seja maior ou igual a R$
// 10.000, o programa irá calcular uma comissão de 4% sobre suas vendas,
// mas caso a venda seja menor, o programa calculará apenas 2%.
// let totalVendas = parseFloat(prompt("Digite o seu total de vendas"))

// if (totalVendas >= 10000 ) {
//    let valorComissao = totalVendas * 0.04;
//    document.write("Total da comissão: ", valorComissao);
// }
// else if(totalVendas <= 9999) {
//    valorComissao = totalVendas * 0.02;
//    document.write("Total da comissão: ", valorComissao);

// }

// else {
//    document.write("Digite um valor valido")

// }