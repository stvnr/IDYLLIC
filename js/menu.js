(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const selector1 = document.querySelector('homeButton');
    const selector2 = document.querySelector('aboutButton');
    const selector3 = document.querySelector('servicesButton');
    const selector4 = document.querySelector('portfolioButton');
    const selector5 = document.querySelector('contactButton');


    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    selector1.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    selector2.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
    selector3.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
    selector4.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
    selector5.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });



})();