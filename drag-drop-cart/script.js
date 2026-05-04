$(document).ready(function(){
    $('.product').draggable({ helper:'clone' }); // Makes products draggable.
    $('#cart').droppable({
        accept:'.product',
        drop:function(event,ui){
            let item = $('<div class="cart-item">'+ui.draggable.text()+'</div>');
            $('#cart').append(item); item.slideDown(); // Required cart update animation.
        }
    });
});
