'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const navA = document.querySelectorAll("nav a");
    
        
    const nav = document.querySelector(".nav");
    const header = document.querySelector("header");
    const button = document.querySelector(".fa-bars");

    window.addEventListener('scroll', function(e){

 
        if(window.scrollY > 80){
            header.setAttribute("id", "scroll-header");
            nav.setAttribute("id", "scroll-nav");
            button.removeAttribute("id", "navButton");
            console.log(this.scrollY)

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

    // window.addEventListener('resize', function(){
        
    //     const h1 = document.querySelector("h1")

    //     if (screen.width <= 1000) {
    //         header.setAttribute("id", "scroll-header");
    //         nav.setAttribute("id", "scroll-nav");
    //         button.removeAttribute("id", "navButton");
    //         h1.setAttribute("id", "h1-none")

    //     } else {
    //         nav.removeAttribute("id", "scroll-nav");
    //         header.removeAttribute("id", "scroll-header");
    //         button.setAttribute("id", "navButton");
    //         h1.removeAttribute("id", "h1-none")

    //         for (let i = 0; i < navA.length; i++) {
    //             navA[i].removeAttribute("id", "navButton"); 
    //         };
    //     }
    //   });
});
        

