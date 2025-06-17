// gallery.js

// Lista de imagens (adicione ou remova URLs conforme desejar)
const imagePaths = [
  'images/timeline/imagem2.png',
  'images/timeline/imagem3.png',
  'images/timeline/imagem4.png',
  'images/timeline/imagem5.png',
  'images/timeline/imagem6.png',
  'images/timeline/imagem7.png',
  'images/timeline/imagem8.png',
  'images/timeline/imagem9.png',
  'images/timeline/imagem10.png',
  'images/timeline/imagem11.png',
  'images/timeline/imagem12.png',
  'images/timeline/imagem13.png',
  'images/timeline/imagem14.png',
  'images/timeline/imagem15.png',
  'images/timeline/imagem16.png',
  'images/timeline/imagem17.png',
  'images/timeline/imagem20.png',
  'images/timeline/imagem21.png',
  'images/timeline/imagem22.png',
  'images/timeline/imagem24.png',
  'images/timeline/imagem25.png',
];

const galleryScroll = document.getElementById('galleryScroll');

function loadGallery() {
  for (let i = 0; i < 999; i++) { // grande repetição para looping infinito visual
    imagePaths.forEach(path => {
      const img = document.createElement('img');
      img.src = path;
      img.alt = 'Memória do casal';
      galleryScroll.appendChild(img);
    });
  }
}

window.onload = loadGallery;