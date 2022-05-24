//var name = "Den";

//let number = 7;
//const pi = 3.14;

//number = 4;


//let LeftBorderWidth = 200;

//number
//string - "", '', ``
//true/false
//null
//undefinde

// let obj = {
//  name: "apple",
//  color: "green",
//  weight: 200
//} 

//Symbol

//alert(1212312);

//console.log(number);
//let answer = confirm('вам есть 18?');
//console.log(answer);

//let answer = prompt('вам есть 18?', "");
//console.log(answer);

//console.log(4 + "fdd");

/* let isChecked = true,
    isClosed = false;

console.log(isChecked && isClosed);

console.log(isChecked || isClosed); */

/* if (2 * 4 == 8 * 2) {
    console.log('Right')
} else {
    console.log('NO')
} */

/* let answer = confirm('вам есть 18?');
if (answer) {
    console.log('покупайте')
} else {
    console.log('не продам')
} */


/* const num = 50;
if (num < 49) {
    console.log('no')
} else if (num > 100) {
    console.log('big')
} else {
    console.log('right')
} */

/* for (i = 1; i < 8; i++) {
    console.log(i);
} */

/* function logging(a, x) {
    console.log(a + x)
}
logging(8, 3);
logging(111, 3); */

//Используется slick slider с помощью библиотеки jquery
$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src= "icons/carousel/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src= "icons/carousel/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                    
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false
                    
                }
            },

        ]
        
        
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
        $(this)
          .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
        
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

   //MODAL 
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order' ).fadeOut('slow');    
    
    });
    
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow'); 
        })      
    });

    

    function validateForms(form){
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
               
            
            },
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: jQuery.validator.format("Введите {2} символов!")
                },
                phone: "Пожалуйста, введите свое номер",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Не правильный адрес"
                } 
            }    
        });
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    //smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }

    
    });
    //скрипт для скрола медленного 
    $("a[href^=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       
        return false;
        
    });
    
    new WOW().init();
    
});


/* для tiny-slider */
/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});  
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});   */

