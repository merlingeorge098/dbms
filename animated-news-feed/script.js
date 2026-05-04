$(document).ready(function(){
    function loadNews(){
        $('#spinner').show(); $('#news').empty();
        // jQuery AJAX fetches news from local PHP mock API.
        $.ajax({url:'news.php',dataType:'json',success:function(data){
            $('#spinner').hide();
            data.forEach(function(n,i){ let item=$('<div class="news">'+n+'</div>'); $('#news').append(item); item.delay(i*300).slideDown(); }); // Shows news one by one.
        },error:function(){ $('#spinner').text('Could not fetch news'); }});
    }
    $('#refresh').click(loadNews); loadNews();
});
