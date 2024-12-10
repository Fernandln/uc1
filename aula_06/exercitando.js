// Crie um codigo que classificque o desempenho de um empregado com base o numero de vendas realizadas. O numero de vendas sera dado pela variavel VENDAS. O codigo deve verificar as seguintes condições:
// 1. se o numero de vendas for menor que 0, exibir: "numero de vendas invalido"
// 2. Se  numero de vendas for de 0 a 4 exibir "desempenho insuficiente"
// 3. Se o numero de vendas for de 5 a 9, exibir: "desempenho satisfatorio"
// 4. Se o numero de vendas for de 10 ou mais, exibir: "desempenho excelente"

let vendas = 10;
if (vendas < 0) {
    console.log("numero de vendas invalido");
}
else if (vendas >= 0 && vendas < 4){
    console.log("desempenho insuficiente");
}
else if(vendas >= 5 && vendas < 9) {
    console.log("desempenho satisfatorio")
}
else if(vendas >= 10){
    console.log("desempenho excelente");
}