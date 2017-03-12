/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


 var step = 4, // colorChage step, use negative value to change direction
     ms   = 100,  // loop every
     $uni = $('.unicorn'),
     txt  = $uni.text(),
     len  = txt.length,
     lev  = 360/len,
     newCont = "",
     itv;

 for(var i=0; i<len; i++)newCont += "<span style='color:hsla("+ i*lev +", 100%, 50%, 1)'>"+ txt.charAt(i) +"</span>";

 $uni.html(newCont); // Replace with new content
 var $ch = $uni.find('span'); // character

 function anim(){
   itv = setInterval(function(){
     $ch.each(function(){
       var h = +$(this).attr('style').split(',')[0].split('(')[1]-step % 360;
       $(this).attr({style:"color:hsla("+ h +", 100%, 50%, 1)"});
     });
   }, ms);
 }
 function stop(){ clearInterval(itv); }

 anim();




// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(window).load(function() {
        // Animate loader off screen
        $("body").removeClass("preload");
        $(".se-pre-con").fadeOut("fast");
    });
// Closes the Responsive Menu on Menu Item Click


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.navbar-collapse ul li a').click(
    function() {
        $(this).closest('.collapse').collapse('toggle');
    }
);
