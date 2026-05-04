$(document).ready(function(){
    let questions=[{q:'HTML stands for?',o:['Hyper Text Markup Language','High Text Machine Language','Home Tool Markup'],a:0},{q:'CSS is used for?',o:['Styling','Database','Server'],a:0},{q:'JS is used for?',o:['Interactivity','Only images','Typing'],a:0}];
    let current=0, score=0, time=10, interval;
    function loadQuestion(){
        clearInterval(interval); time=10; $('#timer').text(time);
        if(current>=questions.length){ $('#question').text('Quiz Finished'); $('#options').html('Final Score: '+score); $('#next').hide(); return; }
        let q=questions[current]; $('#question').hide().text(q.q).fadeIn(); $('#options').empty();
        q.o.forEach((op,i)=>$('#options').append('<label class="option"><input type="radio" name="ans" value="'+i+'"> '+op+'</label>'));
        interval=setInterval(function(){ time--; $('#timer').text(time); if(time===0){ checkAnswer(); } },1000); // 10 second countdown.
    }
    function checkAnswer(){
        clearInterval(interval);
        let selected=$('input[name="ans"]:checked').val();
        if(Number(selected)===questions[current].a){ score++; $('#score').text(score); } // Updates score dynamically.
        $('#options').fadeOut(300).delay(300).fadeIn(300); // Required transition using fadeOut and delay.
        current++; loadQuestion();
    }
    $('#next').click(checkAnswer); loadQuestion();
});
