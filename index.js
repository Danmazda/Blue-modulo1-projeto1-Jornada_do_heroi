const prompt = require("prompt-sync")();
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
    "Você acorda e o mundo está acabando. Aconteceu. Um vírus transmissível por saliva torna as pessoas em mortos-vivos. O apocalipse zumbi começou. Você está em sua casa sozinho, tem sua fiel mochila do seu lado e alguns suprimentos espalhados pela casa. Escolha cuidadosamente quais suprimentos irá levar para sua jornada de sobrevivência e veja seu destino..."
);

console.log();

let countY = 0;

questions.forEach(question => {
    let userResponse = questionFunc(question);
    while (!acceptedResponses.includes(userResponse)) {
        console.log("Favor responder sim ou não, s ou n");
        userResponse = questionFunc(question);
    }
    if (userResponse === "s") {
        countY++;
    }
});

console.log();

if (countY == 0) {
    console.log(
        "Não se preparou nada? Pelo menos você corre rápido, tão rápido que se esgota rapidamente... Você tem que procurar por suprimentos antes que morra de fome. Acaba entrando numa casa abandonada que não estava tão abandonada assim."
    );
} else if (countY == 1) {
    console.log(
        "Com poucos recursos os zumbis te pegam muito rápido. Agora você é mais um deles."
    );
} else if (countY == 2) {
    console.log(
        "Quis economizar no espaço, mas acabou se ferrando, sobreviveu um pouco mais que outros... mas não muito mais."
    );
} else if (countY == 3) {
    console.log(
        "Equilíbrio perfeito entre recursos e leveza. Você sobrevive por bastante tempo... mas será o bastante?"
    );
} else if (countY == 4) {
    const luck = Math.floor(2 * Math.random());
    let str;
    if (luck === 0) {
        str =
            "E a sorte não estava a seu favor. Foi cercado por zumbis sem tempo para reagir. Ninguém apareceu para te salvar";
    } else {
        str =
            "E não é que você é sortudo? Foi cercado por zumbis, mas conseguiu escapar com a ajuda de outros sobreviventes e viver por mais tempo.";
    }
    console.log(
        `Pegou muitos recursos, mas você ficou lerdo, seu destino está nas mãos da pura sorte... ${str}`
    );
} else if (countY == 5) {
    console.log(
        "Pegou recursos demais e ficou lento demais, não consegue nem reagir pra pegar sua arma... Bem vindo ao exército zumbi."
    );
} else {
    console.log("ERROR - CountY surpassed 5 - please reestart script.");
}

function questionFunc(question) {
    return prompt(question + " ")
        .toLowerCase()
        .trim()
        .slice(0, 1);
}
