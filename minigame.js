// =======================
// JOGO DA MEMÓRIA
// =======================
const emojis = ['💖','💌','🥰','🌹','😍','😘', '🤍', '✨', '🤭'];
let memoryCards = [...emojis, ...emojis]; // duplicar para pares
memoryCards = shuffle(memoryCards);
const memoryBoard = document.getElementById('memory-board');
let flipped = [];
let lockBoard = false;
let matchedPairs = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createMemoryBoard() {
  memoryBoard.innerHTML = '';
  matchedPairs = 0;
  memoryCards.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.textContent = '';
    card.addEventListener('click', flipCard);
    memoryBoard.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard || this.classList.contains('flipped')) return;

  this.textContent = this.dataset.emoji;
  this.classList.add('flipped');
  flipped.push(this);

  if (flipped.length === 2) {
    lockBoard = true;
    setTimeout(checkMatch, 600);
  }
}

function checkMatch() {
  const [first, second] = flipped;
  if (first.dataset.emoji === second.dataset.emoji) {
    flipped = [];
    lockBoard = false;
    matchedPairs++;
    if (matchedPairs === emojis.length) triggerConfetti();
  } else {
    setTimeout(() => {
      first.textContent = '';
      second.textContent = '';
      first.classList.remove('flipped');
      second.classList.remove('flipped');
      flipped = [];
      lockBoard = false;
    }, 500);
  }
}

function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);
  const confetti = window.confetti.create(canvas, { resize: true });
  confetti({ spread: 180, ticks: 300, particleCount: 150, origin: { y: 0.6 } });
  setTimeout(() => document.body.removeChild(canvas), 4000);
}

document.getElementById('reset-memory').addEventListener('click', () => {
  memoryCards = shuffle([...emojis, ...emojis]);
  flipped = [];
  lockBoard = false;
  createMemoryBoard();
});

createMemoryBoard();


// =======================
// MONTE SUA DECLARAÇÃO
// =======================
const declarationPool = document.getElementById('declaration-pool');
const declarationTarget = document.getElementById('declaration-target');

const words = [
  "Eu", "te", "amo", "muito", "princesa", "do", "meu", "coração", "para", "sempre", "mundinho", "cor-de-rosa", "favorito", "só", "você","minha", "razão", "de", "viver", "vida", "com", "é", "perfeita", "tudo", "sorte", "eterna", "melhor", "namorada", "mundo", "gratidão", "por", "nós", "nossa", "história", "incrível", "complicidade", "carinho", "cuidado", "amor", "real", "deus", "me", "presenteou", "com", "porto", "seguro", "nunca", "vou", "desistir", "da", "gente", "orgulho", "parabéns", "abrigo", "linda", "maravilhosa", "encantadora", "quero", "bem", "pra", "a", "parte", "mim", "sou", "mais", "feliz", "desde", "que", "conheci", "universo", "minha",
];

function createWordBlocks() {
  declarationPool.innerHTML = '';
  shuffle(words).forEach(word => {
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = word;
    span.draggable = true;
    span.addEventListener('dragstart', dragStart);
    declarationPool.appendChild(span);
  });
}

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.textContent);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const word = event.dataTransfer.getData("text");
  const span = document.createElement('span');
  span.className = 'word';
  span.textContent = word;
  declarationTarget.querySelector('.placeholder')?.remove();
  declarationTarget.appendChild(span);
}

document.getElementById('clear-declaration').addEventListener('click', () => {
  declarationTarget.innerHTML = '<p class="placeholder">Arraste para cá!</p>';
});

createWordBlocks();


// =======================
// JOGO DO COFRE
// =======================
// =======================
// JOGO DO COFRE
// =======================
const safePassword = "0611"; // Senha editável
const safeInput = document.getElementById("safe-input");
const unlockSafeBtn = document.getElementById("unlock-safe");
const safeDoor = document.getElementById("safe-door");
const safeReward = document.getElementById("safe-reward");
const hintContainer = document.getElementById("safe-hints");

const toggleVisibilityBtn = document.createElement("button");
toggleVisibilityBtn.textContent = "🙈";
toggleVisibilityBtn.className = "toggle-safe-visibility";
toggleVisibilityBtn.style.marginLeft = "10px";
toggleVisibilityBtn.addEventListener("click", () => {
  if (safeInput.type === "password") {
    safeInput.type = "text";
    toggleVisibilityBtn.textContent = "👁️";
  } else {
    safeInput.type = "password";
    toggleVisibilityBtn.textContent = "🙈";
  }
});
safeInput.parentNode.insertBefore(toggleVisibilityBtn, safeInput.nextSibling);

const hintBtn = document.createElement("button");
hintBtn.textContent = "💡 Pedir Dica";
hintBtn.className = "hint-btn";
hintBtn.style.marginLeft = "10px";
safeInput.parentNode.appendChild(hintBtn);

const hintsForSafe = [
  "É Uma Data Muito Importante Para Nós Dois... 👀",
  "Dia e Mês em Ordem... 🤔",
  "Tem A Ver Com Um Pedido Especial... 🙈",
  "É Um Dia Perto Do Final Do Ano... 😏",
  "Uma Data Que Comemoramos Juntos Todos Os Meses... 😅",
  "Você  ainda disse \"Imagina Eu Mando Você Ir Dormir Agora\" no diakkkkkkkk 🤣",
];
let shownHints = [];

hintBtn.addEventListener("click", () => {
  if (shownHints.length >= 3) return;

  let newHint;
  do {
    newHint = hintsForSafe[Math.floor(Math.random() * hintsForSafe.length)];
  } while (shownHints.includes(newHint) && shownHints.length < hintsForSafe.length);

  if (!shownHints.includes(newHint)) {
    shownHints.push(newHint);
    const p = document.createElement("p");
    p.className = "hint-text";
    p.textContent = `💡 ${newHint}`;
    p.style.color = "#ff80cc";
    hintContainer.appendChild(p);
  }
});

const safeRewards = [
  "💌 Uma nova cartinha de amor personalizada",
  "🎁 Um presente secreto feito com carinho",
  "🎉 Um convite para um rolê especial",
  "👩‍❤️‍👨 Um momento inesquecível a dois",
  "📸 Uma foto exclusiva para lembrar",
  "🎶 Uma música que marca a história de vocês",
  "🍫 Um chocolate favorito entregue com amor",
  "💖 Um lembrete de o quanto é amada",
  "🙈 Você pode me pedir o que quiser",
  "👀 Quero realizar qualquer desejo seu",
  "🎫 Um vale cineminha para nós dois",
  "🌷 Vamo andar de mãos dadas na orla da praia?",
  "😅 10zão no PIX agora (Sei que não vai aceitarkkkkkk)"
];

// Limite de recompensas que serão exibidas (aleatórias)
const numRewardsToShow = 2;

// Ao acertar a senha:
unlockSafeBtn.addEventListener("click", () => {
  const input = safeInput.value.trim();

  if (input === safePassword) {
    safeDoor.classList.remove("closed");
    safeDoor.classList.add("opened");
    safeReward.classList.remove("hidden");

    // Gerar recompensas aleatórias
    const selectedRewards = shuffle([...safeRewards]).slice(0, numRewardsToShow);
    const rewardList = document.getElementById("safe-reward-list");
    rewardList.innerHTML = '';
    selectedRewards.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      rewardList.appendChild(li);
    });
  } else {
    safeInput.style.borderColor = "#ff4f4f";
    safeInput.value = "";
    safeInput.placeholder = "Senha incorreta!";
    setTimeout(() => {
      safeInput.style.borderColor = "#d17eff";
      safeInput.placeholder = "Digite a senha...";
    }, 1500);
  }
});



// =======================
// ROLETA DO AMOR
// =======================
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const resultDisplay = document.getElementById('result-display');

const wheelPhrases = [
  "💋 Um beijinho na bochecha",
  "💌 Uma cartinha surpresa",
  "🤗 Um abraço bem apertado",
  "🎶 Escolher uma música juntos",
  "🍫 Ganhar um chocolate",
  "📸 Uma selfie romântica",
  "🎥 Ver um filme juntinhos",
  "🙂 Dizer algo fofo um para o outro",
  "🤝 Pode me pedir o que quiser (Sim, mais uma vezkkkkkk)"
];

let currentRotation = 0;

spinBtn.addEventListener('click', () => {
  const randomSpin = 360 * (3 + Math.random() * 2); // Gira entre 3 e 5 voltas
  currentRotation += randomSpin;
  wheel.style.transition = 'transform 3s cubic-bezier(0.33, 1, 0.68, 1)';
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    const index = Math.floor(Math.random() * wheelPhrases.length);
    resultDisplay.textContent = wheelPhrases[index];
  }, 3200);
});
