// hamburger 

let hamburger = document.querySelector('.fa-bars');

// ul to animate 

const ulNav = document.querySelector('.nav-ul');



hamburger.addEventListener('click', () => {
    ulNav.classList.toggle('open');
})

// clicking the nav li means we have to make the burger menu disappear

// about li 

let aboutLi = document.querySelector('.about-li');

aboutLi.addEventListener('click', () => {
    ulNav.classList.toggle('open');
    
})


// copywriting li

let copyLi = document.querySelector('.copywriting-li');

copyLi.addEventListener('click', () => {
    ulNav.classList.toggle('open');
    
})

// content li 

let contentLi = document.querySelector('.content-li');

contentLi.addEventListener('click', () => {
    ulNav.classList.toggle('open');
    
})

// touch li 

let touchLi = document.querySelector('.touch-li');

touchLi.addEventListener('click', () => {
    ulNav.classList.toggle('open');
    
})