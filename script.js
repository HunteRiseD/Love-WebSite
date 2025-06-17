// FRASES DE AMOR ALEATÓRIAS
const loveReasons = [
  "Seu sorriso ilumina até os meus dias mais escuros. 😊",
  "Você é meu lugar favorito no mundo inteiro. 💖",
  "Acordar e saber que você existe já torna tudo melhor. 😴",
  "Eu te amo mais do que palavras conseguem expressar. 💭",
  "Seu abraço é o melhor remédio que existe. 💊",
  "Com você, cada momento se torna mágico. 🤗",
  "Você é a resposta para todas as minhas orações. 🥰",
  "Te amo não só pelo que você é, mas por quem eu sou quando estou com você. 🤍",
  "O som da sua risada é minha música preferida. 😁",
  "Você é meu sonho realizado. 😌",
  "Estar com você é como viver em um conto de fadas. 🧚‍♀️",
  "Você me faz querer ser uma pessoa melhor todos os dias. 🤩",
  "Não importa onde estou, desde que esteja com você. 💑",
  "Nosso amor é a minha história favorita. 📜",
  "Você é o meu para sempre. 😘"
];

// FRASES/IMAGENS PARA O CARROSSEL
const carouselItems = [
  "Você é minha inspiração diária. ✨",
  "Nosso amor só cresce com o tempo. 💞",
  "Lembrando daquele nosso primeiro beijo... ❤️",
  "Cada momento ao seu lado é um tesouro. 💌",
  "O mundo fica mais bonito quando estou com você. 🌎",
  "Juntos somos perfeitos! 😍",
  "Você e eu, para sempre. 😊",
  "Amar você é tão natural quanto respirar. 😇"
];

// CARREGAR ITENS DO CARROSSEL
const carouselContent = document.getElementById("carouselContent");
carouselItems.forEach((text, index) => {
  const slide = document.createElement("div");
  slide.textContent = text;
  slide.classList.add("carousel-slide");
  carouselContent.appendChild(slide);
});

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 4000); // Troca a cada 4 segundos

// BOTÃO DE FRASE DE AMOR
const heartButton = document.getElementById("heartButton");
const lovePhrase = document.getElementById("lovePhrase");

heartButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * loveReasons.length);
  const phrase = loveReasons[randomIndex];

  lovePhrase.textContent = phrase;
  lovePhrase.classList.remove("hidden");
  lovePhrase.classList.add("visible");

  // Reanimação
  lovePhrase.style.opacity = 0;
  setTimeout(() => {
    lovePhrase.style.opacity = 1;
  }, 100);
});