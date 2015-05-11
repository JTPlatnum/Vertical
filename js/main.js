$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 11000
    });

    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('#header-menu ul').toggleClass('active');
 
        e.preventDefault();
    });

    $('#thumbRecipeOne .getRecipe').on('click', function(){
        $('#hiddenRecipeOne').toggleClass('active');
    });

    $('#thumbRecipeTwo .getRecipe').on('click', function(){
        $('#hiddenRecipeTwo').toggleClass('active');
    });


    $('#thumbRecipeThree .getRecipe').on('click', function(){
        $('#hiddenRecipeThree').toggleClass('active');
    });

    $('#thumbRecipeFour .getRecipe').on('click', function(){
        $('#hiddenRecipeFour').toggleClass('active');
    });

});

