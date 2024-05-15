/************************************
FEATURE CAROUSEL
************************************/
$(document).ready(function() {
    let prev = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#014B4B"/>
        <path d="M27 20H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 27L13 20L20 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    let next = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#014B4B"/>
        <path d="M13 20H27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 13L27 20L20 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    
    
    $('.features-carousel').owlCarousel({
        loop:false,
        margin:30,
        dots:false,
        nav: true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText: [prev, next],
        responsive:{
            0:{
                items:1,
            },
            525:{
                items:2,
            },
            991:{
                items:3,
            },
            1360:{
                items:4,
            },
            1480:{
                items:5,
            }
        }
    })
    $('.testimonial-carousel').owlCarousel({
        loop:false,
        margin:30,
        dots:true,
        nav: false,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText: [prev, next],
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2,
            },
            1279:{
                items:3,
            }
        }
    })    
})
