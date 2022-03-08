const prompt = require("prompt-sync")();
const responses = [];
const acceptedResponses = ["s", "n"];
const questions = [
  "Você tem uma espingarda. Pegar?",
  "Colocar na mochila comida e água?",
  "Colocar na mochila remédios?",
  "Pegar o bastão de beisebol?",
  "Pegar fósforos e desodorante spray?",
];

console.clear();
console.log(
  "Você acorda e o mundo está acabando. Aconteceu. Um vírus transmissível por saliva torna as pessoas em mortos-vivos. O apocalipse zumbi começou, escolha quais suprimentos irá levar para sua jornada de sobrevivência e veja seu destino..."
);

console.log();

questions.forEach((question) => {
  let userResponse = questionFunc(question);
  while (!acceptedResponses.includes(userResponse)) {
    console.log("Favor responder sim ou não, s ou n");
    userResponse = questionFunc(question);
  }
  responses.push(userResponse);
});

const countY = responses.filter((response) => {
  return response === "s";
});

console.log();

switch (countY.length) {
  case 0:
    console.log(
      "Não se preparou nada? Pelo menos você corre rápido, mas você tem que procurar por suprimentos uma hora. E é nessa hora que você se vê cercado. Adeus esperança."
    );
    break;
  case 1:
    console.log(
      "Com poucos recursos os zumbis te pegam muito rápido. Agora você é mais um deles."
    );
    break;
  case 2:
    console.log(
      "Quis economizar no espaço, mas acabou se ferrando, sobreviveu um pouco mais que outros... mas não muito mais."
    );
    break;
  case 3:
    console.log(
      "Equilíbrio perfeito entre recursos e leveza. Você sobrevive por bastante tempo... mas será o bastante?"
    );
    break;
  case 4:
    let luck = Math.floor(2 * Math.random());
    let str;
    if (luck == 0) {
      str =
        "E a sorte não estava a seu favor. Foi cercado por zumbis sem tempo para reagir. Ninguém apareceu para te salvar";
    } else {
      str =
        "E não é que você é sortudo? Foi cercado por zumbis, mas conseguiu escapar com a ajuda de outros sobreviventes e viver por mais tempo.";
    }
    console.log(
      `Muitos recursos, mas você ficou lerdo, seu destino está nas mãos da pura sorte... ${str}`
    );
    break;
  case 5:
    console.log(
      "Pegou recursos demais e ficou lento demais, não consegue nem reagir pra pegar sua arma... Bem vindo ao exército zumbi."
    );
    break;
  default:
    console.log("Something went wrong countY length surpassed 5");
    break;
}

function questionFunc(question) {
  return prompt(question + " ")
    .toLowerCase()
    .trim()
    .slice(0, 1);
}
