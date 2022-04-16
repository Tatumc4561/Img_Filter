$(function () {
    // get all links and attach the `click` handler to them
    $('#bgcolor').change(function(){
        $('.image-wrapper').css('background-color',$('#bgcolor').val());
    });
});
