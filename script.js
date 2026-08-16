function createPetal() {
  const container = document.getElementById('sakura-container');
  if (!container) return;

  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Tamanho aleatório entre 10px e 20px
  const size = Math.random() * 10 + 10;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 1.3}px`;

  // Posição inicial horizontal aleatória (0% a 100%)
  petal.style.left = `${Math.random() * 100}%`;

  // Tempo de queda aleatório (entre 4s e 9s)
  const duration = Math.random() * 5 + 4;
  petal.style.animationDuration = `${duration}s`;

  // Tom de rosa levemente variado
  const colors = ['#ffb7c5', '#ffc0cb', '#ffe4e1', '#f8a5c2'];
  petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  container.appendChild(petal);

  // Remove a pétala do DOM após a conclusão da animação
  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

// Gera uma nova pétala a cada 300ms
setInterval(createPetal, 300);
