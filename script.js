// Seleciona todos os elementos que têm a classe 'escondido'
const cards = document.querySelectorAll('.escondido');

function verificarScroll() {
  const alturaTela = window.innerHeight * 0.85;

  cards.forEach(card => {
    const topoDoCard = card.getBoundingClientRect().top;

    // Se o card apareceu na tela, adiciona a classe 'visivel'
    if (topoDoCard < alturaTela) {
      card.classList.add('visivel');
    }
  });
}

// Ouve o evento de rolagem da página
window.addEventListener('scroll', verificarScroll);

// Executa uma vez ao carregar para caso algum item já esteja visível
verificarScroll();

// Aguarda todo o HTML carregar antes de executar a lógica
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão pelo ID
    const btnYoutube = document.getElementById('btnYoutube');

    // Verifica se o botão realmente existe na página
    if (btnYoutube) {
        btnYoutube.addEventListener('click', () => {
            // Substitua pela URL exata do seu canal do YouTube
            const urlCanal = 'https://www.youtube.com/@camiladorameira'; 

            // Abre o canal em uma nova aba do navegador
            window.open(urlCanal, '_blank');
        });
    }
    
});