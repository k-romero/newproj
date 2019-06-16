import '../styles/index.scss';

console.log('webpack starterkit');

let navElm = document.querySelector('.menu-icon');
let navMenu = document.querySelector('nav ul');
navElm.onclick = function() {
    navMenu.classList.toggle('showing');
};

const nav = document.querySelector('nav');

window.addEventListener('scroll', function() { 
    let nav = document.querySelector('nav');
    let scrollpos = window.scrollY;
    if (scrollpos >= 30) { nav.classList.add('black'); }
    else if (scrollpos == 0){ nav.classList.remove('black'); }
    else {}
    console.log(scrollpos);
  });
