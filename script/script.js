$(document).ready(function () {
    function next() {
     $(".inner").animate({marginLeft:"-200%"},600, function(){
      $(".inner").css({"margin-left":"-100%"})   ;
      $(".slide").last().after($(".slide").first())
      anime();
     })
        clear()
    }
    function prev() {
        $(".inner").animate({ marginLeft: '0%' }, 600, function () {
            $(".inner").css({ 'margin-left': '-100%' });
            $('.slide').first().before($('.slide').last())
            anime();
        })
        clear();
     }
    function anime() {
        ($(this).scrollTop() > 75)?
        $(".text ").css({ 'opacity': '0' })&&$(".icons").css({"opacity":"0"}):
        $(".text ").css({ 'opacity': '1' })
        $(".text h1").css({ 'margin-top': '11%', 'opacity': '1', 'transition': '0.3s' })
        $(".text p").css({ 'margin-top': '1%', 'opacity': '1', 'transition': '0.4s' })
        $(".text button").css({ 'margin-top': '1%', 'opacity': '1', 'transition': '0.5s' })
    }
    function clear() {
        $(".text ").css({ 'opacity': '0' })
        $(".text h1,.text p,.text button").css({ 'margin-top': '40%', 'opacity': '0' })
    }
    function clearli() {
        $('.liline').css({ "width": "0px" })
    }
    setTimeout(function () { clear() }, 6700)
    window.clearInterval(anime())
    $('.right').click(function () {
        next();
    })
    $('.left').click(function () {
        prev();
    })
    setInterval(function () { next() }, 7000) 
    $("#main .home").hover(function () {
        clearli();
        $(this).append($('.liline'))
        $('.liline').css({ 'background':'white',"width": $(this).width(), "transition": "0.2s ease-out" })
    })
    $(".sfhead #main .home").hover(function () {
        clearli();
        $(this).append($('.liline'))
        $('.liline').css({ 'background':'black',"width": $(this).width(), "transition": "0.2s ease-out" })
    })
    $("#main li").mouseleave(function () {
        clearli();
    })
    var click = true;
    $(".lines").click(function () {
        if (click == true) {
            $(".line2").css({ 'width': '0px', 'transition': '0.3s ease' })
            $(".line1").css({ 'width': '0px', 'transition': '0.5s ease' })
            $(".line").css({ 'width': '0px', 'transition': '0.7s ease' })
            $(".Cline1").css({ 'width': '30px', 'transition': '0.3s' })
            setTimeout(function () {
            $(".Cline2").css({ 'width': '30px', 'transition': '0.1s' })
            $("#main").css({ 'visibility': 'visible', 'transition': '0.3s' })
            $(".sfhead #main").css({ 'visibility': 'visible', 'transition': '0.3s' })
            }, 200)
            click = false;}
        else {
            $(".line2").css({ 'width': '30px', 'transition': '0.7s ease' })
            $(".line1").css({ 'width': '30px', 'transition': '0.5s ease' })
            $(".line").css({ 'width': '30px', 'transition': '0.3s ease' })
            $(".Cline2").css({ 'width': '0px', 'transition': '0.1s' })
            setTimeout(function () {
            $(".Cline1").css({ 'width': '0px', 'transition': '0.1s' })
            $("#main").css({ 'visibility': 'hidden', 'transition': '0.3s' })
            $(".sfhead #main").css({ 'visibility': 'hidden', 'transition': '0.3s' })
            }, 100)
            click = true;} })
            $(window).scroll(function(){
                ($(this).scrollTop() > 70)?$(".fhead").slideDown().css({"background":"#0d42be"})
                &&$(".text").css({"opacity":"0",})&&$(".icons").css({"opacity":"0"})
                :$(".fhead").css({"background":"transparent"})&&$(".text").css({"opacity":"1"})&&$(".icons").css({"opacity":"1"}); 
            });

 $(window).scroll(function(){
    $(this).scrollTop() > 100 ? $('.scrollup').fadeIn() : $('.scrollup').fadeOut();
});
$('.scrollup').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
    $(this).css({ "color": "white" })
    return false;
}); 
})

