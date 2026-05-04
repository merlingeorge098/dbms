$(document).ready(function(){
    $('.question').click(function(){
        $(this).toggleClass('active'); // Highlights clicked question.
        $(this).next('.answer').slideToggle(); // Opens/closes answer smoothly.
        $('.answer').not($(this).next()).slideUp(); // Closes other answers for accordion effect.
        $('.question').not(this).removeClass('active');
    });
});
