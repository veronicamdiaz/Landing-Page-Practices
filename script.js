import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

document.addEventListener('DOMContentLoaded', function () {
  // Código para a troca de imagem
  const imagem = document.getElementById('imagem-troca');
  let estado = 'inicial';
  imagem.addEventListener('click', function () {
    if (estado === 'inicial') {
      imagem.src = 'images/lights drawings2-05-05.jpg';
      estado = 'alterada';
    } else {
      imagem.src = 'images/lights drawings2-09-09.jpg';
      estado = 'inicial';
    }
  });

  // Inicialização do modelo 3D
  let mouseX = 0, mouseY = 0;
  const container = document.getElementById('webgl-container');
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);  // Adiciona o renderizador dentro de #webgl-container

  const scene = new THREE.Scene();

  // Criar um cubo maior
  const geometry = new THREE.BoxGeometry(2, 2, 2); // Aumentei o tamanho do cubo (2x2x2)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.7 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  scene.background = new THREE.Color(0xF5F5F5);  // Cor de fundo #F5F5F5

   // Definir a posição do cubo para ficar mais para cima
   cube.position.y = 1; // Aqui é onde ajustamos a posição vertical do cubo

   // Melhorar a qualidade aumentando a resolução
  renderer.setPixelRatio(window.devicePixelRatio); // Usa a resolução nativa do dispositivo

  // Câmera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;  // Posicionando a câmera para visualizar o cubo maior

  // Adicionar luz ambiente
  const light = new THREE.AmbientLight(0x404040); // luz suave
  scene.add(light);

  // Adicionar luz direcional
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5).normalize();
  scene.add(directionalLight);

  // Função de animação
  function animate() {
    requestAnimationFrame(animate);
    
    // A rotação do cubo será controlada pela posição do mouse
    cube.rotation.x = mouseY * Math.PI; // Multiplica a posição Y do mouse por pi
    cube.rotation.y = mouseX * Math.PI; // Multiplica a posição X do mouse por pi

    renderer.render(scene, camera);
  }

  animate();

<<<<<<< HEAD
=======
  // Função para ajustar o tamanho do renderizador e atualizar a câmera
function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Atualiza as proporções da câmera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Ajusta o tamanho do renderizador
  renderer.setSize(width, height);
}

// Adiciona um event listener para chamar a função sempre que a janela for redimensionada
window.addEventListener('resize', onWindowResize, false);

// Chama a função uma vez para configurar inicialmente
onWindowResize();

>>>>>>> f6ba129280c60b0c6296651ffa9bb8a7383d8ce7
  // Redimensionar o renderizador quando a janela for redimensionada
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Captura o movimento do mouse
  function onMouseMove(event) {
    // Normaliza a posição do mouse (de -1 a 1 para cada eixo)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  // Adiciona o ouvinte para o movimento do mouse
  window.addEventListener('mousemove', onMouseMove, false);
});
