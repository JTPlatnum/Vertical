$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 11000
    });

    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('#header-menu ul').toggleClass('active');
 
        e.preventDefault();
    });

// start open menu items


// end open menu items



//start open recipes
    $('.apricots.open-recipe').on('click', function(){
        $('.apricots.product-recipe-hidden').toggleClass('active');
    });


    $('.figs.open-recipe').on('click', function(){
        $('.figs.product-recipe-hidden').toggleClass('active');
    });

//end open recipes




});

