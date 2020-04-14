$(document).ready( function(){
    // REFERENCES
    var dropdown = $('.dropdown a');
    var language = $('.language');
    // EVENTS
    dropdown.click(function() {
        var item = $(this);
        item.next('.dropdown-menu').toggle();
        item.toggleClass('selected');
    });

    language.mouseenter(function (){
        $(this).next().toggleClass('fa-angle-down fa-angle-up');
    });
    
    language.mouseleave(function (){
        $(this).next().toggleClass('fa-angle-down fa-angle-up');
    });







}); /* <- End Ready */