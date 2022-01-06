'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const navA = document.querySelectorAll("nav a");

    window.addEventListener('scroll', function(e){
        
        const nav = document.querySelector(".nav");
        const header = document.querySelector("header");
        const button = document.querySelector(".fa-bars");

        if(window.scrollY > 80){
            header.setAttribute("id", "scroll-header");
            nav.setAttribute("id", "scroll-nav");
            button.removeAttribute("id", "navButton");

        } else {
            nav.removeAttribute("id", "scroll-nav");
            header.removeAttribute("id", "scroll-header");
            button.setAttribute("id", "navButton");
            
            for (let i = 0; i < navA.length; i++) {
                navA[i].removeAttribute("id", "navButton"); 
            };
        }
    });

    let show = true;

    document.querySelector(".fa-bars").addEventListener('click', function(z){
        
        
        if (show == true){
            
            for (let i = 0; i < navA.length; i++) {
                navA[i].setAttribute("id", "navButton");  
            };
            show = false;
            console.log(show);
        } else {
            for (let i = 0; i < navA.length; i++) {
                navA[i].removeAttribute("id", "navButton"); 
            };
            show = true;
        }
    })
});
        

