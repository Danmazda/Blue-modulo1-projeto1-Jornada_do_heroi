const prompt = require("prompt-sync")();
const acceptedResponses = ["s", "n"];
const questions = [
    "Você tem uma espingarda. Pegar?",
    "Colocar na mochila comida e água?",
    "Colocar na mochila remédios?",
    "Pegar o bastão de beisebol?",
    "Pegar fósforos e desodorante spray?",
];

let res;
while (res != "n") {
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
            "Não se preparou nada? Pelo menos você corre rápido, tão rápido que se esgota rapidamente... Você tem que procurar por suprimentos antes que morra de fome. Acaba entrando numa casa abandonada que não estava tão abandonada assim... Zumbis aparecem de todos os cômodos. Você está cercado. Acabou a esperança."
        );
    } else if (countY == 1) {
        console.log(
            "Com poucos recursos você consegue sobreviver por pouco tempo. Quando você mais precisa acabou tudo. Presa fácil pros zumbis. Agora você é mais um deles."
        );
    } else if (countY == 2) {
        console.log(
            "Quis economizar no espaço, mas acabou se ferrando, sobreviveu um pouco mais que outros, mas quando estava chegando perto de um acampamento de sobreviventes se distraiu e foi pego por uma armadilha, originalmente colocada lá para pegar zumbis a armadilha dentada se dechou na sua perna, fazendo você perder seu movimento, tentou se arrastar, e gritou, mas o único que ouviu seu grito foi um zumbi próximo... Acabou a esperança.  "
        );
    } else if (countY == 3) {
        console.log(
            "Equilíbrio perfeito entre recursos e leveza. Você sobrevive por bastante tempo até encontrar um resquício de civilização. Agora a sua maior batalha será lidar com os vivos..."
        );
    } else if (countY == 4) {
        const luck = Math.floor(2 * Math.random());
        let str;
        if (luck === 0) {
            str =
                "E a sorte não estava a seu favor. Foi cercado por zumbis sem tempo para reagir. Ninguém apareceu para te salvar";
        } else {
            str =
                "E não é que você é sortudo? Foi cercado por zumbis, mas conseguiu escapar com a ajuda de outros sobreviventes e viver por mais tempo.Eles te levam até o acampamento deles, a companhia é algo bom... Até restar poucos recursos pra todo mundo.";
        }
        console.log(
            `Pegou muitos recursos, mas você ficou lerdo, seu destino está nas mãos da pura sorte... ${str}`
        );
    } else if (countY == 5) {
        console.log(
            "Pegou recursos demais, ficou muito lento com toda essa tralha. Na hora que se vê cercado por zumbis não consegue nem saber qual arma usar... Por trás um zumbi pega sua mochila e te puxa, fazendo você perder o equilíbrio, assustado e desorientado você perde o foco e outro zumbi pega sua perna, outro seu pescoço... Uma mordida na jugular. Acabou a esperança."
        );
    } else {
        throw new Error("ERROR - CountY surpassed 5");
    }

    res = questionFunc("Deseja jogar novamente? [N] para sair");
}

function questionFunc(question) {
    return prompt(question + " ")
        .toLowerCase()
        .trim()
        .slice(0, 1);
}
