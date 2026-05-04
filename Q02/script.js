$(document).ready(function(){
    let index = 0;
    let slides = $('.slide');
    let timer;
    function showSlide(i){
        slides.fadeOut(300); // Hides all images smoothly.
        slides.eq(i).fadeIn(500); // Shows selected image smoothly.
    }
    function nextSlide(){ index = (index + 1) % slides.length; showSlide(index); }
    function prevSlide(){ index = (index - 1 + slides.length) % slides.length; showSlide(index); }
    function startAuto(){ timer = setInterval(nextSlide,3000); } // Auto-play every 3 seconds.
    function stopAuto(){ clearInterval(timer); } // Stops auto-play on hover.
    $('#next').click(nextSlide); $('#prev').click(prevSlide);
    $('.slider').hover(stopAuto,startAuto);
    showSlide(index); startAuto();
});
