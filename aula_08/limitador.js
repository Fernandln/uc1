const limiteSaques = 3;
let saldo = 0;
let extrato = "";
let limite = 500;
let numeroSaques = 0;

while(true) {
    let menu = prompt(`
            ==========================
                Selecione uma opção: 
                [d] - Depósito
                [s] - Saque
                [e] - Extrato
                [q] - Sair
                ${saldo}
            ==========================
            `); 
    if(menu == "d") {
        let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
        if(valor > 0) {
            saldo = saldo + valor;
            extrato = extrato + `Depósito de R$ ${valor}  `;
            alert(`Depósito de R$ ${valor} realizado com sucesso`);
        }
        else {
            alert("@@@ Operação falhou! O valor informado é inválido!")
        }
    }
    else if(menu == "s") {
        let valor = parseFloat(prompt("Informe o valor do saque: R$"));
        if(valor > 0) {
            if(saldo >= valor){
                if(numeroSaques < limiteSaques && valor <= limite){
                    saldo = saldo - valor;
                    extrato = extrato + `saque de R$ ${valor}  `;
                    numeroSaques++
                    alert(`saque de R$ ${valor} realizado com sucesso`);
                }
                else{
                    alert("limite de saques atingido!")
                }
            }
            else{
                alert("Saldo indisponivel")
            }
        }
        else {
            alert("@@@ Operação falhou! O valor informado é inválido!")
        }
    }
    else if(menu == "e"){
        if(extrato == ""){
            alert(`Não foram realizadas movimentações.`);
            
        }
        else{
            alert(`${extrato}`);
        }
        
    }
    else if(menu == "q"){
       break
        
    }
    else{
        alert("digite uma opção valida!")
    }
    
}

