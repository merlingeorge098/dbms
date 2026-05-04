$(document).ready(function(){ let total=0;
    $.get('products.php',function(data){
        data.forEach(function(p){ $('#products').append('<div class="product">'+p.name+' - ₹'+p.price+' <button class="add" data-name="'+p.name+'" data-price="'+p.price+'">Add</button></div>'); });
    },'json');
    $('#products').on('click','.add',function(){
        let name=$(this).data('name'), price=Number($(this).data('price'));
        // AJAX POST simulates adding item to backend cart.
        $.post('cart.php',{name:name,price:price},function(){ let item=$('<div class="cart-item">'+name+' - ₹'+price+' <button class="remove" data-price="'+price+'">Remove</button></div>'); $('#cart').append(item); item.slideDown(); total+=price; $('#total').text(total); });
    });
    $('#cart').on('click','.remove',function(){ let price=Number($(this).data('price')); $(this).parent().fadeOut(function(){ $(this).remove(); total-=price; $('#total').text(total); }); });
});
