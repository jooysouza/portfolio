
var $menuHamburguer = document.querySelector('.menu-hamburguer'),
    $spanHamburguer = document.querySelector('.span-hamburguer')
    $menu = document.querySelector('.menu-nav');

$menuHamburguer.addEventListener('click', function() {
  this.classList.toggle('active');
  $menu.classList.toggle('active');
})