// Seleciona o botão e o menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Adiciona evento de clique no botão
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // Alterna a classe "open"
});
