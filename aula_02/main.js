let z = "Preste atenção ";
// document.write(z + " você esta sendo alertado!");
let nomeUsuario = prompt("Qual o seu nome?");
document.write(z + nomeUsuario)

if (nomeUsuario === "null" || nomeUsuario === "") {
    alert("Digite um nome!")
}