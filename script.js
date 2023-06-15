const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

const pro = document.getElementsByClassName('products-box');

console.log(pro);
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// pro //////////
function clickPro() {
  window.location.href = 'sproduct.html';
}
