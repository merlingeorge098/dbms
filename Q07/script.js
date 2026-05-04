$(document).ready(function(){
    $('#upload').click(function(){
        $('#msg').hide(); $('#bar').css('width','0').text('0%');
        // animate fills the bar over 5 seconds.
        $('#bar').animate({width:'100%'},{duration:5000,step:function(now){$(this).text(Math.round(now)+'%');},complete:function(){ $('#msg').fadeIn(); }});
    });
});
