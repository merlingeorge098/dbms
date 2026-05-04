$(document).ready(function(){
    $.get('poll.php',{action:'get'},function(data){
        $('#poll').html('<h2>'+data.question+'</h2>');
        data.options.forEach(function(o,i){ $('#poll').append('<button class="vote" data-option="'+i+'">'+o+'</button> '); });
    },'json');
    $('#poll').on('click','.vote',function(){
        if(localStorage.getItem('voted')){ alert('You already voted'); return; } // Prevents multiple votes from same browser.
        let option=$(this).data('option');
        // POST sends vote to PHP and returns updated counts.
        $.post('poll.php',{action:'vote',option:option},function(data){ localStorage.setItem('voted','yes'); showResults(data); },'json');
    });
    function showResults(data){
        $('#results').empty(); data.options.forEach(function(o,i){ let div=$('<div class="result">'+o+': '+data.votes[i]+' votes</div>'); $('#results').append(div); div.slideDown(); }); // Required slideDown update.
    }
});
