let slideIndex = [1, 1, 1, 1]; // Índices de slides para cada slideshow
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]; // Classes dos slides para cada slideshow

// Mostrar o primeiro slide de cada slideshow inicialmente
for (let i = 0; i < slideId.length; i++) {
  showSlides(1, i);
  autoSlide(i); // Inicia o slideshow automático para cada conjunto
}

// Função para avançar os slides automaticamente
function autoSlide(no) {
  setInterval(function() {
    plusSlides(1, no); // Avança para o próximo slide
  }, 5000); // Muda o slide a cada 3 segundos (3000 milissegundos)
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]); // Pega todos os slides do grupo

  if (n > x.length) {slideIndex[no] = 1} // Se for o último slide, vai para o primeiro
  if (n < 1) {slideIndex[no] = x.length} // Se for o primeiro slide e avançar, vai para o último

  // Esconde todos os slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Mostra o slide atual
  x[slideIndex[no] - 1].style.display = "block";
}