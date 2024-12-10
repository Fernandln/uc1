
// 1. A escola Lemos Segundo resolveu criar um programa para ajudar os professores nos conceitos dos estudantes. O(a) professor(a) irá digitar a nota tirada pelo aluno. Caso seja menor do que 0 ou maior do que 10, o programa irá escrever "Nota Inválida"; se for maior ou igual a 0 e menor do que 4, o programa irá escrever, "aluno reprovado". Se a nota for maior ou igual a 4 e menor do que 7, o programa irá escrever "Aluno em Recuperação" e, caso seja maior ou igual a 7 e menor ou igual a 10, escreverá "Aluno Aprovado". 

// let notaAluno = 20;

// if (notaAluno < 0 || notaAluno > 10) {
//     console.log("Nota invalida");
// }
// else if (notaAluno >= 0 && notaAluno < 4){
//     console.log("Aluno reprovado");
// }
// else if(notaAluno >= 4 && notaAluno < 7) {
//     console.log("Aluno em Recuperação")
// }
// else if(notaAluno >= 7 && notaAluno <= 10){
//     console.log("Aluno Aprovado");
// }

//A escola Lemos Segundo gostou do sistema que você desenvolveu e, com isso, pediu um “upgrade”. Aproveitando o código do exercício anterior, eles solicitaram que, no caso de o estudante ficar em recuperação, o programa deverá solicitar a digitação de mais uma nota. Se essa nota for menor que 5, o programa escreverá “Reprovado na Recuperação” e, caso contrário, “Aprovado na Recuperação”.


let notaAluno = parseInt(prompt("Digite a nota da recuperação"));

if (notaAluno < 0 || notaAluno > 10) {
    document.write("Nota invalida");
}
else if (notaAluno >= 0 && notaAluno < 4){
    document.write("Aluno reprovado");
}
else if(notaAluno >= 4 && notaAluno < 7) {
    document.write("Aluno em recuperação", "<br>");

    
    let notaRecuperacao = parseInt(prompt("Digite a nota da recuperação"));
    if(notaRecuperacao < 5){
        document.write("Aluno reprovado na recuperação");
    }
    else{
        document.write("Aluno aprovado na Recuperação ");
    }
}
else if(notaAluno >= 7 && notaAluno <= 10){
    document.write("Aluno Aprovado");
}
console.log("estou funcionando :)")