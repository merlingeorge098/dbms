$(document).ready(function(){ let start=0, limit=5, loading=false;
    function loadPosts(){
        if(loading) return; loading=true; $('#loading').show();
        // AJAX fetches next set of posts from JSONPlaceholder.
        $.get('https://jsonplaceholder.typicode.com/posts?_start='+start+'&_limit='+limit,function(data){
            $('#loading').hide(); data.forEach(function(p){ let div=$('<div class="post"><h3>'+p.title+'</h3><p>'+p.body+'</p></div>'); $('#posts').append(div); div.fadeIn(); }); start+=limit; loading=false;
        });
    }
    $(window).scroll(function(){ if($(window).scrollTop()+$(window).height() >= $(document).height()-20){ loadPosts(); } }); // Detects bottom of page.
    loadPosts();
});
