document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('header');

  menuToggle.addEventListener('click', function () {
    // Alterna a visibilidade do menu
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('hidden');

    // Alterna classe no header para controle de ícones
    header.classList.toggle('menu-open');
  });
});
