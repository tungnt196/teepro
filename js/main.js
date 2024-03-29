$(document).ready(function(){
    $('.section-pages.display-desktop .owl-carousel, .section-feedback .owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:0,
        dots: true,
        nav: false,
        items:1
    });
        
    $('.section-pages.display-mobile .owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:0,
        dots: true,
        nav: false,
        responsive:{
            0: {
                items:1,
            },
            639: {
                items:2,
            },
            976: {
                items:3,
            }
        }
    });
    
    function showMenu(){
        var top = $(window).scrollTop();
        if(top >= $('.main-menu').height()){
            $('.main-menu').addClass('scroll');
            setTimeout(function (){
                $('.main-menu').addClass('position-fixed')
            },300)
        } else{
            $('.main-menu').removeClass('position-fixed');
            $('.main-menu').removeClass('scroll');
        }
        if(top > $('.main-banner').height()){
            $('.main-menu').addClass('in');
        } else{
            $('.main-menu').removeClass('in');
        }
    }
    
    showMenu();
    
    $(window).scroll(function(){
        showMenu();
    })
    
    setTimeout(function (){
        $('head').append($('<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap" rel="stylesheet">'));
    }, 300);
})
