$(document).ready(function(){
    $('#search').keyup(function(){
        let keyword = $(this).val();
        // GET asks PHP for matching products without page reload.
        $.get('products.php',{q:keyword},function(data){
            $('#results').empty();
            if(data.length === 0){ $('#results').html('<p class="error">No results found</p>'); return; }
            data.forEach(function(item){
                let div = $('<div class="product">'+item+'</div>');
                $('#results').append(div); div.fadeIn(); // Required fadeIn for filtered results.
            });
        },'json');
    });
});
