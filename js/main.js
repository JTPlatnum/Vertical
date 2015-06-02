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
    $('.nav li.dropdown ul.dropdown-menu li.figs').on('click', function(){
        $('main.figs.product-main').toggleClass('active'); 
    });

// end open menu items



//start open recipes
    $('.figs.open-recipe').on('click', function(){
        $('.figs.product-recipe-hidden').toggleClass('active');
    });    

    $('.mandarins.open-recipe').on('click', function(){
        $('.mandarins.product-recipe-hidden').toggleClass('active');
    });
    
    $('.kiwis.open-recipe').on('click', function(){
        $('.kiwis.product-recipe-hidden').toggleClass('active');
    });
    
    $('.plums.open-recipe').on('click', function(){
        $('.plums.product-recipe-hidden').toggleClass('active');
    });

    $('.apricots.open-recipe').on('click', function(){
        $('.apricots.product-recipe-hidden').toggleClass('active');
    });
    
    $('.limes.open-recipe').on('click', function(){
        $('.limes.product-recipe-hidden').toggleClass('active');
    });

    $('.persimmons.open-recipe').on('click', function(){
        $('.persimmons.product-recipe-hidden').toggleClass('active');
    });

    $('.pineapple_quince.open-recipe').on('click', function(){
        $('.pineapple_quince.product-recipe-hidden').toggleClass('active');
    });
//end open recipes




});

