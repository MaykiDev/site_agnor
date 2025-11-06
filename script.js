// O código JavaScript permanece o mesmo do passo anterior e está correto para a funcionalidade

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Função para Abrir o Menu
    const openNavMenu = () => {
        navMenu.classList.add('open');
        
        // Esconde o ícone hamburguer ao abrir o menu (apenas em mobile)
        if (window.innerWidth <= 768) {
             menuToggle.style.visibility = 'hidden'; 
             menuToggle.style.opacity = '0';
        }

        document.body.style.overflow = 'hidden';
    };

    // Função para Fechar o Menu
    const closeNavMenu = () => {
        navMenu.classList.remove('open');
        
        // Mostra o ícone hamburguer ao fechar o menu (apenas em mobile)
        if (window.innerWidth <= 768) {
            menuToggle.style.visibility = 'visible'; 
            menuToggle.style.opacity = '1';
        }

        document.body.style.overflow = 'auto';
    };

    // Evento de clique para o ícone Hamburguer
    menuToggle.addEventListener('click', openNavMenu);

    // Evento de clique para o ícone 'X' (Fechar)
    closeMenu.addEventListener('click', closeNavMenu);

    // Fechar o menu ao clicar em um link (útil no mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavMenu);
    });
    
    // Inicialização e Resize: Garante a visibilidade correta no desktop/mobile
    const checkVisibility = () => {
        if (window.innerWidth > 768) {
            menuToggle.style.visibility = 'hidden';
            navMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        } else if (!navMenu.classList.contains('open')) {
            menuToggle.style.visibility = 'visible';
            menuToggle.style.opacity = '1';
        }
    };
    
    checkVisibility();
    window.addEventListener('resize', checkVisibility);
});