// messages.js

const loveLetters = [
  {
    title: "Cartinha 1 - Nosso Início 💌",
    content: `Oi minha princesa 💗\n\nLembra de quando a gente se conheceu lá em março de 2021? Mal sabíamos que aquele momento ia mudar tudo nas nossas vidas. Cada detalhe desde aquele tempo — desde a primeira mensagem, até a primeira foto que vi sua — ficou marcado em mim.\n\nVocê virou parte de mim sem nem perceber. E quando você me chamou no zap... foi aí que tudo começou de verdade. As conversas, as risadas... ali já era impossível não me apaixonar mais a cada dia.`,
    background: "images/fundos/fundo1.jpg"
  },
  {
    title: "Cartinha 2 - Amor que Cresceu 🌸",
    content: `Meu bem 🥺💘\n\nNunca vou esquecer o dia 26 de junho de 2022. Foi quando criei coragem pra te pedir em namoro. Você ficou com vergonha e mandou eu dormir, kkkkkk, mas no fundo meu coração sabia que era só questão de tempo.\n\nE foi. Porque no dia seguinte você me explicou tudo e aceitou. E ainda me disse que me amava antes de dormir. Ali, foi a certeza de que tudo que a gente construiu era real, era puro, era nosso.`,
    background: "images/fundos/fundo2.jpg"
  },
  {
    title: "Cartinha 3 - Cada Lembrança 💭",
    content: `Môzinha 💕\n\nTe lembrar dizendo que comprou um conjunto de lingerie toda feliz me fez rir e me apaixonar de novo no mesmo instante, kkkkk. Suas safadezas sempre aumentaram depois do algum pouco tempo, né? Eu amava (e amo) cada pedacinho disso também, porque tudo vem de você.\n\nE mesmo com os sustos (como quando o zap começou apagar tudo em agosto e depois em outubro), a gente superou tudo junto. Eu sempre dei um jeito de salvar tudo, mesmo quando acabei perdendo as minhas partes favoritas. Mas você tava ali. Isso bastava.`,
    background: "images/fundos/fundo3.jpg"
  },
  {
    title: "Cartinha 4 - Nunca foi um fim 💔✨",
    content: `Meu amorzinho 😔❤️\n\nOutubro de 2024 foi um baque, a gente sabe. Mas não houve um fim de verdade... porque nem você nem eu queríamos isso. A gente ainda se fala, ainda se cuida, ainda se gosta como nunca.\n\nE eu acredito, de verdade, que o nosso recomeço está logo ali. A gente tem muita coisa linda pra viver. Muito mais fotos pra ver, sonhos pra realizar, momentos pra criar. E tudo isso, com você.\n\nTe amo desde o dia que nossos caminhos se cruzaram, e não vai ser diferente amanhã. 💫`,
    background: "images/fundos/fundo4.jpg"
  },
  {
    title: "Cartinha 5 - Nosso Futuro 🌈",
    content: `Amor da minha vida 💖\n\nImagina só... a gente se vendo pela primeira vez. O abraço apertado, o cheiro, o carinho. O nome dos nossos filhos já pensados, os planos pra nossa casa, os rolês favoritos, os pratos que cada um ama... tudo ali, juntinho.\n\nE eu olho pra isso e vejo um "pra sempre" escrito no nosso destino. A gente não é qualquer casal. A gente é a gente.\n\nSe for pra viver um grande amor nessa vida, que seja o nosso. Te espero. Sempre. 💞`,
    background: "images/fundos/fundo5.jpg"
  },
  {
  title: "Cartinha 6 - Pensando em você 🌙",
  content: `Oi, minha pequena 🐣❤️\n\nTô aqui deitado(a), pensando em você... e em como tudo seria diferente se você não tivesse aparecido na minha vida. É doido pensar que uma pessoa só consegue bagunçar tudo dentro da gente — de um jeito bom, sabe?\n\nSinto falta de tudo. Do seu jeitinho bobo, das suas manias, até das vezes em que você ficava brava e depois vinha com aquela carinha fofa querendo colo.\n\nVocê é o meu lugar seguro, mesmo quando o mundo tá um caos.\n\n (E sim, eu realmente tava deitado já para dormir e liguei o PC para escrever essa cartinhakkkkk)`,
  background: "images/fundos/fundo6.jpg"
  },
  {
    title: "Cartinha 7 - Seu cheiro, seu riso 😊",
    content: `Oi neném 💗\n\nEu queria guardar seu cheiro num potinho. Juro. Às vezes, fecho os olhos e parece que você tá aqui, encostada(o) no meu peito, com aquele sorriso que só você sabe dar. E aí tudo desacelera.\n\nEu sei que a vida às vezes aperta, mas só de imaginar você sorrindo, já me dá vontade de continuar. Você nem imagina o quanto me faz bem, mesmo nos dias em que a gente nem se fala tanto.\n\nVocê é o meu riso favorito.`,
    background: "images/fundos/fundo7.jpg"
  },
  {
    title: "Cartinha 8 - Fica comigo 🥺",
    content: `Mô... 💞\n\nFica comigo. Mesmo nos dias difíceis. Mesmo quando eu estiver insuportável, ou quando você estiver na bad. Fica. Porque eu fico. Sempre fiquei.\n\nEu não preciso de grandes declarações ou presentes caros. Eu só preciso de você... dizendo que ainda quer tudo isso tanto quanto eu.\n\nE mesmo que a gente brigue, discorde ou se perca às vezes, quero saber que no fim do dia... ainda somos nós dois. 💘`,
    background: "images/fundos/fundo8.jpg"
  },
  {
    title: "Cartinha 9 - Por tudo o que somos 🧸",
    content: `Amorzinho meu 💌\n\nÀs vezes a gente se pega lembrando do passado e rindo de coisas tão pequenas, né? E é nessas horas que eu percebo o quanto a gente cresceu. Juntos.\n\nA gente caiu, chorou, afastou, mas também se amou de um jeito tão nosso... tão intenso, tão real. Não é qualquer coisa isso que a gente tem. Nunca foi.\n\nVocê é minha saudade favorita, minha calma em forma de gente. Te carrego comigo até sem perceber.`,
    background: "images/fundos/fundo9.jpg"
  },
  {
    title: "Cartinha 10 - Em silêncio, ainda é amor 🤍",
    content: `Oi amor... 😔\n\nÀs vezes fico em silêncio, mas é só porque sinto muito. Às vezes falo menos, mas é porque meu coração tá cheio demais e não sei como dizer tudo que sinto por você.\n\nEu te amo em cada detalhe. Mesmo quando tô longe, mesmo quando tô quieto(a). E eu sei que a gente ainda tem muita história pra escrever.\n\nNão deixei de te amar nem por um segundo.`,
    background: "images/fundos/fundo10.jpg"
  },
  {
    title: "Cartinha 11 - Nosso lugarzinho no mundo 🌎",
    content: `Meu neném 🌷\n\nSonho tanto com nosso cantinho... sabe? Aquele lugar só nosso, com cheiro de café, coberta no sofá, suas roupas misturadas nas minhas. As risadas altas, o som do seu "te amo" antes de dormir, e aquela paz que só você me traz.\n\nNão quero uma vida perfeita. Quero uma vida com você. Mesmo com bagunça, com tropeços, com altos e baixos... mas com amor de verdade.\n\nE o nosso, você sabe, nunca foi pequeno.`,
    background: "images/fundos/fundo11.jpg"
  },
  {
    title: "Cartinha 12 - Te escolho sempre 💗",
    content: `Amor meu 🥰\n\nMesmo que o tempo passe, mesmo que as coisas mudem, tem algo que nunca muda: o quanto eu te escolho. Todos os dias. Mesmo nos mais difíceis.\n\nTe escolher não é só querer estar junto quando tá tudo bem. É segurar sua mão quando o mundo desaba. É te lembrar que você é incrível, mesmo quando esquece disso.\n\nVocê é o melhor que já me aconteceu.`,
    background: "images/fundos/fundo12.jpg"
  }
];

const buttonsContainer = document.getElementById("buttons-container");
const letterPaper = document.getElementById("letter-paper");
const letterText = document.getElementById("letter-text");
const closeBtn = document.getElementById("closeLetter");

function renderLetters() {
  buttonsContainer.innerHTML = "";

  loveLetters.forEach((letter, index) => {
    const btn = document.createElement("button");
    btn.textContent = letter.title;
    btn.addEventListener("click", () => openLetter(index));
    buttonsContainer.appendChild(btn);
  });
}

function openLetter(index) {
  letterText.textContent = loveLetters[index].content;
  letterPaper.style.backgroundImage = `url('${loveLetters[index].background || "papers/default.jpg"}')`;
  letterPaper.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  letterPaper.classList.add("hidden");
});

renderLetters();