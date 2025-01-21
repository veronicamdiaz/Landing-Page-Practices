// Selecione a imagem
const imagem = document.getElementById('imagem-troca');

document.addEventListener('DOMContentLoaded', function() {
  const imagem = document.getElementById('imagem-troca');
  let estado = 'inicial';

  imagem.addEventListener('click', function() {
    if (estado === 'inicial') {
      imagem.src = 'images/lights drawings2-05-05.jpg';
      estado = 'alterada';
    } else {
      imagem.src = 'images/lights drawings2-09-09.jpg';
      estado = 'inicial';
    }
  });
});