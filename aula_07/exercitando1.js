// Construir um programa no qual o usuário digitará um numero entre 1 e 12 e o sistema retornará, na tela, qual mês corresponde a esse numero. O desenvolvedor terá́ que utilizar o comando Switch.





// let numMes = 1


// switch (numMes) {
//     case 1:
//         console.log(`O número ${numMes} corresponde ao mes de Janeiro `);
        
//     break;
//     case 2:
//         console.log(`O número ${numMes} corresponde ao mes de Fevereiro `);

    
//     break;
//     case 3:
//         console.log(`O número ${numMes} corresponde ao mes de Março `);
    
//     break;
//     case 4 :
//         console.log(`O número ${numMes} corresponde ao mes de Abril `);
        
//     break;
//     case 5:
//         console.log(`O número ${numMes} corresponde ao mes de Maio `);

    
//     break;
//     case 6:
//         console.log(`O número ${numMes} corresponde ao mes de Junho `);
    
//     break;
//     case 7:
//         console.log(`O número ${numMes} corresponde ao mes de Julho `);
        
//     break;
//     case 8:
//         console.log(`O número ${numMes} corresponde ao mes de Agosto `);

    
//     break;
//     case 9:
//         console.log(`O número ${numMes} corresponde ao mes de Setembro `);
    
//     break;
//     case 10:
//         console.log(`O número ${numMes} corresponde ao mes de Outubro`);
        
//     break;
//     case 11:
//         console.log(`O número ${numMes} corresponde ao mes de Novembro `);

    
//     break;
//     case 12:
//         console.log(`O número ${numMes} corresponde ao mes de Dezembro `);
    
//     break;
//     default:
//         console.log("Digite o numero de mes que existe!");
//     break;
// }



// Agora, o estudante construirá́, utilizando o comando Switch, um programa para o Senac. O instrutor irá digitar um desses três conceitos (A, PA ou NA). Caso ele escolha A, escreverá na tela “Atendido”; caso ele escolha PA, o programa escreverá na tela “Parcialmente Atendido”; ou caso ele digite NA, o programa colocará na tela “Não Atendido”.

let conceito = "NA"


switch (conceito) {
    case "A" :
        console.log("Atendido")
    break
    case "PA" :
        console.log("Parcialmente Atendido")
    break
    case "NA" :
        console.log("Não Atendido")

    break
    default :
        console.log("Digite um conceito que existe!")
    break
}
