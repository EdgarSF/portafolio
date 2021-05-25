'use strict'

let btnUp = document.querySelector('#buttonUp').addEventListener('click', scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
}

window.onscroll = function(){

    let scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        btnUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        btnUp.style.transform = "scale(0)";
    }

}