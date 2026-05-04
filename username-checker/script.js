$(document).ready(function(){
    $('#username').keyup(function(){
        let username = $(this).val().trim();
        if(username.length < 3){ $('#status').slideUp(); return; }
        // POST sends username to PHP without refreshing the page.
        $.post('check_username.php',{username:username},function(response){
            $('#status').removeClass('available taken').addClass(response.class);
            $('#status').text(response.message).slideDown(); // Required slideDown status display.
        },'json');
    });
});
