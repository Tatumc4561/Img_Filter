$(function () {
    // get all links and attach the `click` handler to them
    $('#no-mix').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});



$(function () {
    // get all links and attach the `click` handler to them
    $('#color-burn').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'color-burn');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});


$(function () {
    // get all links and attach the `click` handler to them
    $('#darken').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'darken');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});


$(function () {
    // get all links and attach the `click` handler to them
    $('#overlay').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'overlay');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});


$(function () {
    // get all links and attach the `click` handler to them
    $('#lighten').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'lighten');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});




$(function () {
    // get all links and attach the `click` handler to them
    $('#soft-light').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'soft-light');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});




$(function () {
    // get all links and attach the `click` handler to them
    $('#exclusion').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'exclusion');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});




$(function () {
    // get all links and attach the `click` handler to them
    $('#difference').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'difference');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});



$(function () {
    // get all links and attach the `click` handler to them
    $('#saturation').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'saturation');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});




$(function () {
    // get all links and attach the `click` handler to them
    $('#hue').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'hue');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});




$(function () {
    // get all links and attach the `click` handler to them
    $('#color').click(function () {

        if($(this).prop('checked') == true){
       
            $('#mainimage').css('mix-blend-mode', 'color');
    
        }

        else if($(this).prop('checked') == false){
    
            $('#mainimage').css('mix-blend-mode', '');
    
        }

        
    
    })
});

//---------------COLOR TABS------------------//

$(function () {
    // get all links and attach the `click` handler to them
    $('#noColor').click(function () {

        if($(this).prop('checked') == true){
       
            $('.main-content').css('background-color', '');
            $('#mainimage').css('mix-blend-mode', '');
            $('.input-wrapper').css('background-color', 'rgb(111, 139, 139)');


            
    
        }

        else if($(this).prop('checked') == false){
    
            $('.main-content').css('background-color', '');
            $('#mainimage').css('mix-blend-mode', '');
            $('.input-wrapper').css('background-color', 'rgb(111, 139, 139)');



        }

        
    
    })
});

$(function () {
    // get all links and attach the `click` handler to them
    $('#red').click(function () {

        if($(this).prop('checked') == true){
       
            $('.main-content').css('background-color', 'rgba(255, 0, 4, 0.48)');
            $('#mainimage').css('mix-blend-mode', 'darken');
            $('.input-wrapper').css('background-color', 'rgba(255, 0, 4, 0.48)');


            
    
        }

        else if($(this).prop('checked') == false){
    
            $('.main-content').css('background-color', '');
            $('#mainimage').css('mix-blend-mode', '');
            $('.input-wrapper').css('background-color', '');


    
        }

        
    
    })
});

$(function () {
    // get all links and attach the `click` handler to them
    $('#green').click(function () {

        if($(this).prop('checked') == true){
       
            $('.main-content').css('background-color', 'rgba(8, 0, 255, 0.48)');
            $('#mainimage').css('mix-blend-mode', 'darken');
            $('.input-wrapper').css('background-color', 'rgba(8, 0, 255, 0.48)');


            
    
        }

        else if($(this).prop('checked') == false){
    
            $('.main-content').css('background-color', '');
            $('#mainimage').css('mix-blend-mode', '');
            $('.input-wrapper').css('background-color', '');


    
        }

        
    
    })
});


$(function () {
    // get all links and attach the `click` handler to them
    $('#blue').click(function () {

        if($(this).prop('checked') == true){
       
            $('.main-content').css('background-color', 'rgba(0, 255, 153, 0.48)');
            $('#mainimage').css('mix-blend-mode', '');
            $('.input-wrapper').css('background-color', 'rgba(0, 255, 153, 0.48)');


            
    
        }

        else if($(this).prop('checked') == false){
    
            $('.main-content').css('background-color', '');
            $('#mainimage').css('mix-blend-mode', '');
            $('.input-wrapper').css('background-color', '');


    
        }

        
    
    })
});