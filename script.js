// ==================== CRIAR PÉTALAS CAINDO (SAKURA) ====================
function criarPetala() {
  const container = document.getElementById("petalas-container");
  if (!container) return; // Evita erro se o container não existir

  const petala = document.createElement("div");
  petala.classList.add("petala");

  // Tamanho aleatório entre 10px e 20px
  const tamanho = Math.random() * 10 + 10;
  petala.style.width = `${tamanho}px`;
  petala.style.height = `${tamanho}px`;

  // Posição inicial na tela
  petala.style.left = Math.random() * 100 + "vw";

  // Duração da queda aleatória entre 4s e 8s
  const duracao = Math.random() * 4 + 4;
  petala.style.animationDuration = `${duracao}s`;

  container.appendChild(petala);

  // Remove a pétala quando a animação terminar
  setTimeout(() => {
    petala.remove();
  }, duracao * 1000);
}

// Inicia a chuva de pétalas a cada 300ms
document.addEventListener("DOMContentLoaded", () => {
  setInterval(criarPetala, 300);
});