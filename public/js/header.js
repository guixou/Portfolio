'use strict';

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function(e){
        
        const header = document.querySelector(".nav");

        if(window.scrollY > 150){
            header.setAttribute("id", "fixed-header");
        } else {
            header.removeAttribute("id", "fixed-header");
        }
    });
});
        
