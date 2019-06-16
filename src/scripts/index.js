import '../styles/index.scss';

console.log('webpack starterkit');

let navElm = document.querySelector('.menu-icon');
let navMenu = document.querySelector('nav ul');
let menuIcon = document.getElementById('menuIcon');
navElm.onclick = function(){
    navMenu.classList.toggle('showing');
    if (menuIcon.className === 'fa fa-bars'){
        menuIcon.className = ('fa fa-times');
    }
    else {
        menuIcon.className = ('fa fa-bars');
    }
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
