(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-416').attr('src', (dpi>1) ? 'images/31-33-01-430.jpg' : 'images/31-33-01-215.jpg');
$('.js-417').attr('src', (dpi>1) ? 'images/31-33-02-430.jpg' : 'images/31-33-02-215.jpg');
$('.js-418').attr('src', (dpi>1) ? 'images/31-33-03-430.jpg' : 'images/31-33-03-215.jpg');
$('.js-419').attr('src', (dpi>1) ? 'images/31-33-05-430.jpg' : 'images/31-33-05-215.jpg');
$('.js-420').attr('src', (dpi>1) ? 'images/31-33-07-430.jpg' : 'images/31-33-07-215.jpg');
$('.js-421').attr('src', (dpi>1) ? 'images/31-33-08-430.jpg' : 'images/31-33-08-215.jpg');
$('.js-422').attr('src', (dpi>1) ? 'images/31-33-13-430.jpg' : 'images/31-33-13-215.jpg');
$('.js-423').attr('src', (dpi>1) ? 'images/31-33-16-430.jpg' : 'images/31-33-16-215.jpg');
$('.js-424').attr('src', (dpi>1) ? 'images/life-shopping-center-578.png' : 'images/life-shopping-center-289.png');
$('.js-425').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-426').attr('src', (dpi>1) ? 'images/fen-zu-2240.png' : 'images/fen-zu-1120.png');
$('.js-427').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-428').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){$('.js-416').attr('src', (dpi>1) ? 'images/31-33-01-320.jpg' : 'images/31-33-01-160-1.jpg');
$('.js-417').attr('src', (dpi>1) ? 'images/31-33-02-320.jpg' : 'images/31-33-02-160-1.jpg');
$('.js-418').attr('src', (dpi>1) ? 'images/31-33-03-320.jpg' : 'images/31-33-03-160-1.jpg');
$('.js-419').attr('src', (dpi>1) ? 'images/31-33-05-320.jpg' : 'images/31-33-05-160-1.jpg');
$('.js-420').attr('src', (dpi>1) ? 'images/31-33-07-320.jpg' : 'images/31-33-07-160-1.jpg');
$('.js-421').attr('src', (dpi>1) ? 'images/31-33-08-320.jpg' : 'images/31-33-08-160-1.jpg');
$('.js-422').attr('src', (dpi>1) ? 'images/31-33-13-320.jpg' : 'images/31-33-13-160-1.jpg');
$('.js-423').attr('src', (dpi>1) ? 'images/31-33-16-320.jpg' : 'images/31-33-16-160-1.jpg');
$('.js-424').attr('src', (dpi>1) ? 'images/life-shopping-center-462.png' : 'images/life-shopping-center-231.png');
$('.js-425').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-426').attr('src', (dpi>1) ? 'images/fen-zu-1792.png' : 'images/fen-zu-896-1.png');
$('.js-427').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-428').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){$('.js-416').attr('src', (dpi>1) ? 'images/31-33-01-256.jpg' : 'images/31-33-01-128.jpg');
$('.js-417').attr('src', (dpi>1) ? 'images/31-33-02-256.jpg' : 'images/31-33-02-128.jpg');
$('.js-418').attr('src', (dpi>1) ? 'images/31-33-03-256.jpg' : 'images/31-33-03-128.jpg');
$('.js-419').attr('src', (dpi>1) ? 'images/31-33-05-256.jpg' : 'images/31-33-05-128.jpg');
$('.js-420').attr('src', (dpi>1) ? 'images/31-33-07-256.jpg' : 'images/31-33-07-128.jpg');
$('.js-421').attr('src', (dpi>1) ? 'images/31-33-08-256.jpg' : 'images/31-33-08-128.jpg');
$('.js-422').attr('src', (dpi>1) ? 'images/31-33-13-256.jpg' : 'images/31-33-13-128.jpg');
$('.js-423').attr('src', (dpi>1) ? 'images/31-33-16-256.jpg' : 'images/31-33-16-128.jpg');
$('.js-424').attr('src', (dpi>1) ? 'images/life-shopping-center-370.png' : 'images/life-shopping-center-185.png');
$('.js-425').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-426').attr('src', (dpi>1) ? 'images/fen-zu-1434.png' : 'images/fen-zu-717.png');
$('.js-427').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-428').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){$('.js-416').attr('src', (dpi>1) ? 'images/31-33-01-160.jpg' : 'images/31-33-01-80.jpg');
$('.js-417').attr('src', (dpi>1) ? 'images/31-33-02-160.jpg' : 'images/31-33-02-80.jpg');
$('.js-418').attr('src', (dpi>1) ? 'images/31-33-03-160.jpg' : 'images/31-33-03-80.jpg');
$('.js-419').attr('src', (dpi>1) ? 'images/31-33-05-160.jpg' : 'images/31-33-05-80.jpg');
$('.js-420').attr('src', (dpi>1) ? 'images/31-33-07-160.jpg' : 'images/31-33-07-80.jpg');
$('.js-421').attr('src', (dpi>1) ? 'images/31-33-08-160.jpg' : 'images/31-33-08-80.jpg');
$('.js-422').attr('src', (dpi>1) ? 'images/31-33-13-160.jpg' : 'images/31-33-13-80.jpg');
$('.js-423').attr('src', (dpi>1) ? 'images/31-33-16-160.jpg' : 'images/31-33-16-80.jpg');
$('.js-424').attr('src', (dpi>1) ? 'images/life-shopping-center-232.png' : 'images/life-shopping-center-116.png');
$('.js-425').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-426').attr('src', (dpi>1) ? 'images/fen-zu-896.png' : 'images/fen-zu-448.png');
$('.js-427').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-428').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{$('.js-416').attr('src', (dpi>1) ? 'images/31-33-01-106.jpg' : 'images/31-33-01-53.jpg');
$('.js-417').attr('src', (dpi>1) ? 'images/31-33-02-106.jpg' : 'images/31-33-02-53.jpg');
$('.js-418').attr('src', (dpi>1) ? 'images/31-33-03-106.jpg' : 'images/31-33-03-53.jpg');
$('.js-419').attr('src', (dpi>1) ? 'images/31-33-05-106.jpg' : 'images/31-33-05-53.jpg');
$('.js-420').attr('src', (dpi>1) ? 'images/31-33-07-106.jpg' : 'images/31-33-07-53.jpg');
$('.js-421').attr('src', (dpi>1) ? 'images/31-33-08-106.jpg' : 'images/31-33-08-53.jpg');
$('.js-422').attr('src', (dpi>1) ? 'images/31-33-13-106.jpg' : 'images/31-33-13-53.jpg');
$('.js-423').attr('src', (dpi>1) ? 'images/31-33-16-106.jpg' : 'images/31-33-16-53.jpg');
$('.js-424').attr('src', (dpi>1) ? 'images/life-shopping-center-154.png' : 'images/life-shopping-center-77.png');
$('.js-425').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-426').attr('src', (dpi>1) ? 'images/fen-zu-598.png' : 'images/fen-zu-299.png');
$('.js-427').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-428').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-481').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-481').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-481-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-482').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-482').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-482-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});