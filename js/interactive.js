'use strict'

/*************************************************************************************************************
 ****************************************** Funcionalidad de la navegacion movil******************************
 ************************************************************************************************************/

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
/*************************************************************************************************************/

/** Formulario **/

const expr = {
    costumerName: /^[a-zA-ZÀ-ÿ]{1,40}$/,
    costumerPhone: /^\d{10}$/,
    costumerEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const contactForm = document.querySelector('#frm_contact');

//Variables para campos
const costumerName = document.querySelector('#costumerName');
const costumerPhone = document.querySelector('#costumerPhone');
const costumerEmail = document.querySelector('#costumerEmail');
const costumerMessage = document.querySelector('#costumerMessage');

costumerName.addEventListener();
costumerPhone.addEventListener();
costumerEmail.addEventListener();
costumerMessage.addEventListener();