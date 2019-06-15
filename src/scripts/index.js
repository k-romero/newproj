import '../styles/index.scss';

console.log('webpack starterkit');

let elm = document.querySelector('.menu-icon');
let navMenu = document.querySelector('nav ul');
elm.onclick = function() {
    navMenu.classList.toggle('showing');
};

const nav = document.querySelector('nav');

window.addEventListener('scroll', function() { 
    let nav = document.querySelector('nav');
    let scrollpos = window.scrollY;
    if (scrollpos >= 30) { nav.classList.add('black'); }
    else if (scrollpos >= 689){ nav.classList.add('red'); }
    else if (scrollpos > 1000){ nav.classList.add('black'); }
    else {}
    console.log(scrollpos);
  });
