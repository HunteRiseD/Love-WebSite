// quiz.js

const quizQuestions = [
  // Objetivas
  {
    type: "multiple",
    question: "Quem pediu em namoro?",
    options: [
      { text: "Luckas", correct: true },
      { text: "Anna", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Quem mandou mensagem primeiro pela primeira vez?",
    options: [
      { text: "Luckas", correct: true },
      { text: "Anna", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Quem disse 'eu te amo' primeiro?",
    options: [
      { text: "Luckas", correct: false },
      { text: "Anna", correct: true }
    ]
  },
  {
    type: "multiple",
    question: "Quem é mais ciumento?",
    options: [
      { text: "Luckas", correct: true },
      { text: "Anna", correct: false }
    ]
  },
  {
    type: "multiple",
    question: "Qual série favorita da Anna?",
    options: [
      { text: "Game of Thrones", correct: false },
      { text: "Naruto", correct: false },
      { text: "Heartstopper", correct: true },
      { text: "Doctor Who", correct: false }
    ]
  },
  // Discursivas
  {
    type: "text",
    question: "Qual rolê favorito de Luckas?"
  },
  {
    type: "text",
    question: "Qual rolê favorito de Anna?"
  },
  {
    type: "text",
    question: "O que Anna mais gosta de comer?"
  },
  {
    type: "text",
    question: "O que Luckas mais gosta de comer?"
  },
  {
    type: "text",
    question: "O que a Anna mais gosta no Luckas? (Tanto personalidade quanto aparência)"
  },
  {
    type: "text",
    question: "O que o Luckas mais gosta na Anna? (Tanto personalidade quanto aparência)"
  },
  {
    type: "text",
    question: "Qual maior desejo dos dois juntos?"
  },
  {
    type: "text",
    question: "O que eles mais têm vontade de fazer primeiro quando se verem?"
  },
  {
    type: "text",
    question: "Qual nome Anna e Luckas, respectivamente, gostariam para seus filhos?"
  }
];

let currentQuestion = 0;

const questionBox = document.getElementById("questionBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderQuestion(index) {
  const q = quizQuestions[index];
  questionBox.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = q.question;
  questionBox.appendChild(title);

  if (q.type === "multiple") {
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";
    q.options.forEach((opt, i) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = i;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(` ${opt.text}`));
      optionsDiv.appendChild(label);
    });
    questionBox.appendChild(optionsDiv);
  } else if (q.type === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Sua resposta...";
    questionBox.appendChild(input);
  }

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === quizQuestions.length - 1 ? "Finalizar" : "Próxima ➡️";
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion(currentQuestion);
  } else {
    alert("Quiz finalizado com sucesso! 🥰 Você é incrível!");
  }
});

renderQuestion(currentQuestion);
