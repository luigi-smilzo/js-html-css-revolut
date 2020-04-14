$(document).ready( function(){
    // REFERENCES
    var dropdown = $('.dropdown a');
    var language = $('.language');
    // EVENTS
    dropdown.click(function() {
        var item = $(this);
        var actualMenu = item.next('.dropdown-menu');

        dropdown.next().not(actualMenu).hide();
        dropdown.not(item).removeClass('selected');

        actualMenu.toggle();
        item.toggleClass('selected');
    });

    language.mouseenter(function (){
        $(this).next().toggleClass('fa-angle-down fa-angle-up');
    });
    
    language.mouseleave(function (){
        $(this).next().toggleClass('fa-angle-down fa-angle-up');
    });







}); /* <- End Ready */