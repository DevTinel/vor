const buttonAbrir = document.querySelector('.mobile-abrir');
const buttonFechar = document.querySelector('.mobile-fechar');
const mobileNav = document.querySelector('#mobileNav');
console.log(mobileNav);

buttonAbrir.addEventListener('click', (e) => {
  buttonAbrir.classList.add('hidden');
  buttonFechar.classList.remove('hidden');
  mobileNav.classList.replace('hidden', 'ativado');
  if (window.innerWidth >= 1024) {
    mobileNav.classList.add('hidden');
  }
});

buttonFechar.addEventListener('click', (e) => {
  buttonAbrir.classList.remove('hidden');
  buttonFechar.classList.add('hidden');
  mobileNav.classList.replace('ativado', 'hidden');
});

const toltip = document.querySelector('.contato-whats');
const paragrafoToltip = document.querySelector('.paragafro-toltip');
console.log(paragrafoToltip);

function handleMouse(e) {
  paragrafoToltip.classList.remove('hidden');
}
function handleMouse2(e) {
  paragrafoToltip.classList.add('hidden');
}
toltip.addEventListener('mouseover', handleMouse);
toltip.addEventListener('mouseout', handleMouse2);
