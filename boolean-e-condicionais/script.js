var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

var nome = 0;

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

//Operadores Lógicos && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

// Meu Exercicio do Operados Logicos &&

var condicional = "5 - 10" && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

//OPERADORES LÓGICOS ||
// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);
