
    // Configura o observador para detectar a rolagem da tela
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o card apareceu na tela enquanto a gente desce
            if (entry.isIntersecting) {
                entry.target.classList.add('revelado');
            }
        });
    }, {
        threshold: 0.15 // Revela quando 15% do card aparecer na tela
    });

    // Seleciona todos os cards de dorama para aplicar o efeito
    document.querySelectorAll('.card-dorama').forEach((card) => {
        observador.observe(card);
    });

// Script das Pétalas Caindo //
    function criarPetala() {
            const container = document.getElementById('petalas-container');
            const petala = document.createElement('div');
            petala.classList.add('petala');
            
            // Tamanho e posição horizontal aleatórios
            const tamanho = Math.random() * 12 + 10; // entre 10px e 22px
            petala.style.width = `${tamanho}px`;
            petala.style.height = `${tamanho}px`;
            petala.style.left = `${Math.random() * 100}vw`;
            
            // Duração e velocidade do vôo
            const duracao = Math.random() * 5 + 6; // entre 6s e 11s
            petala.style.animationDuration = `${duracao}s`;
            
            container.appendChild(petala);

            // Remove a pétala após a animação acabar para não sobrecarregar
            setTimeout(() => {
                petala.remove();
            }, duracao * 1000);
        }

        // Gera pétalas continuamente a cada 300ms
        setInterval(criarPetala, 300);