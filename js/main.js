$(document).ready( function(){
    var dropdown = $('.dropdown a');
    

    dropdown.click(function() {
        var item = $(this);
        item.next('.dropdown-menu').toggle();
        item.toggleClass('selected');
        
    });






















});