'use strict'

function showMenu() {
    let btnMenu = document. querySelector('#btn-menu');
    let menu = document.querySelector('#menu');
    let menuOpc = document.querySelectorAll('.menuItem__link');
    let height = menu.scrollHeight;

    btnMenu.addEventListener('click',()=>{
        if(menu.classList.contains('dropdown')) {
            menu.classList.remove('dropdown');
            menu.removeAttribute('style');
        }else{
            menu.classList.add('dropdown');
            menu.style.height = height + 'px';
        }
    });

    for(let i = 0; i < menuOpc.length; i++){
        menuOpc[i].addEventListener('click', ()=>{
            menu.classList.remove('dropdown');
            menu.removeAttribute('style');
        });
    }
}

window.onload = showMenu();