$(document).ready(function(){$(".js--section-features").waypoint(function(n){"down"==n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")},{offset:"60px;"}),$(".js--scroll-to-plans").click(function(){$("html, body").animate({scrollTop:$(".js--section-plans").offset().top},1400)}),$(".js--scroll-to-features").click(function(){$("html, body").animate({scrollTop:$(".js--section-features").offset().top},500)}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(n){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length&&(n.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){var n=$(o);return n.focus(),n.is(":focus")?!1:(n.attr("tabindex","-1"),void n.focus())}))}}),$(".js--wp-1").waypoint(function(n){$(".js--wp-1").addClass("animated bounceInLeft")},{offset:"70%;"}),$(".js--wp-2").waypoint(function(n){$(".js--wp-2").addClass("animated fadeInUp")},{offset:"70%;"}),$(".js--wp-3").waypoint(function(n){$(".js--wp-3").addClass("animated bounceInLeft")},{offset:"50%;"}),$(".js--wp-4").waypoint(function(n){$(".js--wp-4").addClass("animated pulse")},{offset:"60%;"}),$(".js--nav-icon").click(function(){var n=$(".js--main-nav"),o=$(".js--nav-icon i");n.slideToggle(200),o.hasClass("ion-navicon-round")?(o.removeClass("ion-navicon-round"),o.addClass("ion-close-round")):(o.addClass("ion-navicon-round"),o.removeClass("ion-close-round"))})});