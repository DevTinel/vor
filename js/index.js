const next = document.querySelector('.next');
const img = document.querySelectorAll('.slide-items img');
const prev = document.querySelector('.prev');

function handleClick(event) {
  event.preventDefault();
  img[0].classList.add('hidden');
  img[1].classList.remove('hidden');
}
function handleClick2(event) {
  event.preventDefault();
  img[0].classList.remove('hidden');
  img[1].classList.add('hidden');
}

next.addEventListener('click', handleClick);
prev.addEventListener('click', handleClick2);
