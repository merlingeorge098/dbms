$(document).ready(function(){
    $('#showSignup,#showLogin').click(function(e){
        e.preventDefault(); $('.login,.signup').slideToggle(); // Toggles forms with slide animation.
    });
    $('#loginBtn').click(function(){
        if($('#loginEmail').val()==='' || $('#loginPass').val()===''){ $('#loginMsg').text('All fields required').addClass('error'); return; }
        $('#loginMsg').removeClass('error').addClass('success').text('Login validated');
    });
    $('#signupBtn').click(function(){
        if($('#name').val()==='' || $('#email').val()==='' || $('#pass').val()===''){ $('#signupMsg').text('All fields required').addClass('error'); return; }
        $('#signupMsg').removeClass('error').addClass('success').text('Registration validated');
    });
});
