const limite = 500;
const limiteSaques = 3;
let saldo = 0;
let extrato = "";
let numSaque = 0;


while(true){  // Usar o break para sair do while
    let opcao = prompt(
      `
      digite a opção desejada:
      [d] Deposito 
      [s] Saque 
      [e] Extrato
      [q] Sair
      `);

    if(opcao == "d"){
        let valor = parseFloat(prompt("informe o valor do deposito: R$"));
        if(valor > 0) {
            saldo +=  valor;
            extrato += `Deposito: R$${valor}`;
            alert(`Deposito: R$${valor} foi realizado!`)
        }
        else {
            alert("Digite um valor valido!")
        }
    }
    else if(opcao == "s"){
        let valor = parseFloat(prompt("informe o valor do saque: R$"));
         
        if(valor > 0) {
        
            if (valor <)
            console.log




            if(valor <= limite){
            
                saldo -=  valor;
                extrato += `saque: R$${valor}`;
                alert(`saque: R$${valor} foi realizado!`)

            }
        }
        else {
            alert("Digite um valor valido!")
        }
    }
    

}
