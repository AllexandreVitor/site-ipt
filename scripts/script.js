// Seleciona o botão do menu e o menu de navegação
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

// Adiciona um evento de clique ao botão do menu
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active'); // Alterna a classe "active" no menu
});