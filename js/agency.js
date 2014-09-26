/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//$.stellar();



$(document).ready(function($) {

	var controller = new ScrollMagic();

	// defilement du coeur
	var scene = new ScrollScene({triggerElement: "#pin1", duration: 500, pushFollowers: false, offset:18})
								.setPin("#animHeart", {pushFollowers: false})
								.addTo(controller);

	// battement du coeur
	var tween = TweenMax.to("#animHeart", 1, {scaleX:1.2, scaleY:1.3, ease:Elastic.easeOut, repeat:-1, repeatDelay:0.1, color:"#FFD8CF"});
	var scene2 = new ScrollScene({triggerElement: "#triggerBeat"})
								.setTween(tween)
								.addTo(controller);

	// défilements textes de l'histoire
	var tweenTxt1 = TweenMax.to("#txt1", 1, {left: "+=200", ease:Circ.easeInOut, opacity:1});
	var sceneTxt1 = new ScrollScene({triggerElement: "#triggerTxt1", duration: 400, offset: -50})
								.setTween(tweenTxt1)
								.addTo(controller);
	var tweenTxt1 = TweenMax.to("#txt2", 1, {left: "-=200", ease:Circ.easeInOut, opacity:1});
	var sceneTxt1 = new ScrollScene({triggerElement: "#triggerTxt2", duration: 400, offset: -50})
								.setTween(tweenTxt1)
								.addTo(controller);
	var tweenTxt1 = TweenMax.to("#txt3", 1, {left: "+=200", ease:Circ.easeInOut, opacity:1});
	var sceneTxt1 = new ScrollScene({triggerElement: "#triggerTxt3", duration: 400, offset: -50})
								.setTween(tweenTxt1)
								.addTo(controller);
	var tweenTxt1 = TweenMax.to("#txt4", 1, {left: "-=200", ease:Circ.easeInOut, opacity:1});
	var sceneTxt1 = new ScrollScene({triggerElement: "#triggerTxt4", duration: 400, offset: -50})
								.setTween(tweenTxt1)
								.addTo(controller);

	// défilements des horaires
});
