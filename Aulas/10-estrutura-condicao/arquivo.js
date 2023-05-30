var nome = prompt("Qual é o seu nome?");
var idade = parseInt(prompt("Qual é a sua idade?"));

if (nome == "Anael") {
  console.log("Você é DEV!");

  if (idade >= 18) {
    console.log("Você é um dev maior de idade");
  } else {
    console.log("Você é um dev menor de idade");
  }
} else {
  console.log("Você não é DEV!");
}
