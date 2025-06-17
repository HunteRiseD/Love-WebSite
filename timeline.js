const eventos = [
  {
    data: "Março de 2021",
    titulo: "Nos conhecemos 💫",
    descricao: "Foi em Março de 2021 que nossos caminhos se cruzaram pela primeira vez. 🥰",
    imagem: "",
  },
  {
    data: "29 de Julho de 2021",
    titulo: "Primeiras mensagens 💭",
    descricao: "Trocamos nossas primeiras mensagens no privado... e tudo começou a florescer. 😮",
    imagem: "images/timeline/imagem2.png",
  },
  {
    data: "08 de Agosto de 2021",
    titulo: "Vi sua foto pela primeira vez 📸",
    descricao: "A primeira vez que vi uma foto sua… meu coração sorriu. 😭",
    imagem: "images/timeline/imagem3.png",
  },
  {
    data: "18 de Agosto de 2021",
    titulo: "Nos adicionamos no zap ☎️",
    descricao: "Nos conectamos de vez pelo WhatsApp. A conversa nunca mais parou! 🙏",
    imagem: "images/timeline/imagem4.png",
  },
  {
    data: "26 de Novembro de 2021",
    titulo: "Me pediu ajuda num trabalho 🎨",
    descricao: "Você me pediu ajuda com uma capa de trabalho escolar. Eu amei participar. ☝",
    imagem: "images/timeline/imagem5.png",
  },
  {
    data: "14 de Dezembro de 2021",
    titulo: "Ajudei com a tarefa de inglês 📘",
    descricao: "Te ajudei com uma prova difícil de inglês… e você passou com louvor! 🤓",
    imagem: "images/timeline/imagem6.png",
  },
  {
    data: "17 de Dezembro de 2021",
    titulo: "Primeira vez com fibra azul 💙",
    descricao: "A primeira vez que vi seu cabelo azulzinho... inesquecível! 🤗",
    imagem: "images/timeline/imagem7.png",
  },
  {
    data: "28 de Dezembro de 2021",
    titulo: "Me pediu sonhos 💸",
    descricao: "Você pediu sonhos para mim. Um pedido simples, mas tão especial. 😎",
    imagem: "images/timeline/imagem8.png",
  },
  {
    data: "26 de Junho de 2022",
    titulo: "Primeiro pedido de namoro 😳",
    descricao: "Te pedi em namoro e você achou que eu tava zoando... me mandou dormir kkkk 😅",
    imagem: "images/timeline/imagem9.png",
  },
  {
    data: "27 de Junho de 2022",
    titulo: "Pedido aceito 💖",
    descricao: "No dia seguinte você explicou tudo e disse sim. E ainda disse que me amava 😍",
    imagem: "images/timeline/imagem10.png",
  },
  {
    data: "29 de Junho de 2022",
    titulo: "Primeiro 'mô' 😍",
    descricao: "Me chamou de 'mô' pela primeira vez. Que fofuraaa! 😊",
    imagem: "images/timeline/imagem11.png",
  },
  {
    data: "30 de Junho de 2022",
    titulo: "Pediu minha foto 🤳",
    descricao: "Você quis uma foto minha... e eu tive que procurar uma bem zoada kkkk 🤣",
    imagem: "images/timeline/imagem12.png",
  },
  {
    data: "04 de Julho de 2022",
    titulo: "Mais safadinha que nunca 😏",
    descricao: "A partir daqui… você começou a me surpreender cada vez mais 😳",
    imagem: "images/timeline/imagem13.png",
  },
  {
    data: "19 de Julho de 2022",
    titulo: "Terminamos... 💔",
    descricao: "Nos separamos por um tempo... mas nunca deixamos de nos falar. 😓",
    imagem: "images/timeline/imagem14.png",
  },
  {
    data: "06 de Novembro de 2022",
    titulo: "Voltamos 💪",
    descricao: "Decidimos voltar, mais fortes e apaixonados do que nunca. 😁",
    imagem: "images/timeline/imagem15.png",
  },
  {
    data: "11 de Novembro de 2022",
    titulo: "Comprou lingerie nova 🔥",
    descricao: "Toda empolgada, me contou do conjunto novo... e ficou toda gostosa kkkk 😏",
    imagem: "images/timeline/imagem16.png",
  },
  {
    data: "24 de Dezembro de 2022",
    titulo: "Metadinha ativada 🎄",
    descricao: "Colocamos nossa primeira metadinha juntos, namorando de verdade! 🤪",
    imagem: "images/timeline/imagem17.png",
  },
  {
    data: "25 de Dezembro de 2022",
    titulo: "Nosso primeiro Natal juntos 🎅",
    descricao: "Passamos o Natal juntinhos, mesmo que à distância, mas cheios de amor. 🤭",
    imagem: "",
  },
  {
    data: "31 de Dezembro de 2022",
    titulo: "Nosso primeiro Ano Novo 🥂",
    descricao: "Fechamos o ano com carinho e começamos 2023 juntinhos no coração. 🎉",
    imagem: "",
  },
  {
    data: "25 de Maio de 2023",
    titulo: "Vídeozinho do cabelo 💇‍♀️",
    descricao: "Me mandou um vídeo super fofo mostrando o cabelo. Você é linda demais. 🙃",
    imagem: "images/timeline/imagem20.png",
  },
  {
    data: "03 de Julho de 2023",
    titulo: "Inicial no cabelo ✂️",
    descricao: "Pediu pra fazer a inicial dela no meu cabelo... e eu fiz 😱",
    imagem: "images/timeline/imagem21.png",
  },
  {
    data: "28 de Agosto de 2023",
    titulo: "Zap bugando de novo 😩",
    descricao: "Quase perdeu nossas mensagens, mas salvei tudo a tempo. Ufa! 😰",
    imagem: "images/timeline/imagem22.png",
  },
  {
    data: "Sempre",
    titulo: "Sendo cada vez mais safada 🙈",
    descricao: "Incrivelmente safada… e eu adorava kkkkkkk 😂",
    imagem: "",
  },
  {
    data: "09 de Outubro de 2023",
    titulo: "Zap bugou de novo 😢",
    descricao: "Dessa vez quem perdeu tudo fui eu… mas tá tudo guardado no coração. 😩",
    imagem: "images/timeline/imagem24.png",
  },
  {
    data: "12 de Junho de 2024",
    titulo: "Nosso Dia dos Namorados Mais Especial 💞",
    descricao: "Lembro até hoje desse nosso dia... o presentinho que eu fiz com o maior carinho da minha vida para você.. 💖",
    imagem: "images/timeline/imagem25.png",
  },
  {
    data: "Outubro de 2024",
    titulo: "Terminamos de novo... mas ❤️",
    descricao: "A gente ainda se ama muito. E sabemos que vamos voltar logo. Sempre será você (E eu tenho certeza absoluta). 🤍",
    imagem: "",
  }
];

function criarEvento({ data, titulo, descricao, imagem }) {
  const container = document.getElementById("timeline");

  const div = document.createElement("div");
  div.className = "event";

  const h3 = document.createElement("h3");
  h3.textContent = titulo;

  const dateP = document.createElement("p");
  dateP.className = "date";
  dateP.textContent = data;

  const descP = document.createElement("p");
  descP.textContent = descricao;

  div.appendChild(h3);
  div.appendChild(dateP);
  div.appendChild(descP);

  if (imagem) {
    const img = document.createElement("img");
    img.src = imagem;
    img.alt = titulo;
    img.className = "photo";
    div.appendChild(img);
  }

  container.appendChild(div);
}

eventos.forEach(criarEvento);