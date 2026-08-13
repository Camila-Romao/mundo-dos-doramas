document.addEventListener('DOMContentLoaded', () => {

    // ==============================================
    // 1. RESENHA DO DORAMA 1
    // ==============================================
    const btnResenha1 = document.getElementById("btn-resenha1");
    const textoResenha1 = document.getElementById("resenha-texto1");

    if (btnResenha1 && textoResenha1) {
        btnResenha1.addEventListener("click", function() {
            if (textoResenha1.style.display === "none" || textoResenha1.style.display === "") {
                textoResenha1.style.display = "block"; // Abre a caixa
                btnResenha1.innerText = "✖ Fechar Resenha"; // Muda o texto do botão
            } else {
                textoResenha1.style.display = "none"; // Esconde a caixa
                btnResenha1.innerText = "📖 Ler Resenha"; // Volta o texto original
            }
        });
    }

    // ==============================================
    // 2. BOTÃO DO YOUTUBE
    // ==============================================
    const btnYoutube = document.getElementById('btnYoutube');

    if (btnYoutube) {
        btnYoutube.addEventListener('click', () => {
            const urlCanal = 'https://www.youtube.com/@camiladorameira'; 
            window.open(urlCanal, '_blank');
        });
    }

    // ==============================================
    // 3. CONTADORES DE CURTIDAS
    // ==============================================
    
    // Dorama 1
    const botao1 = document.getElementById("btn-curtir1");
    const numeroContador1 = document.getElementById("contador1");
    let curtidas1 = 0;

    if (botao1 && numeroContador1) {
        botao1.addEventListener("click", function() {
            curtidas1++; // Forma simplificada de somar +1
            numeroContador1.innerText = curtidas1;
        });
    }

    // Dorama 2
    const botao2 = document.getElementById("btn-curtir2");
    const numeroContador2 = document.getElementById("contador2");
    let curtidas2 = 0;

    if (botao2 && numeroContador2) {
        botao2.addEventListener("click", function() {
            curtidas2++; // Forma simplificada de somar +1
            numeroContador2.innerText = curtidas2;
        });
    }

});

// ==============================================
// 4. EFEITO DE SCROLL (OPCIONAL / EXEMPLO)
// ==============================================
// Se você for usar animação de scroll no futuro, defina a função aqui:
function verificarScroll() {
    // Código para verificar itens ao rolar a tela (se for usar)
}

// Ouve o evento de rolagem da página
window.addEventListener('scroll', verificarScroll);
