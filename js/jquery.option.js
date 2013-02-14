
$(function(){
	$('a img').hover(
		function(){$(this).fadeTo(200, 0.4);},
		function(){$(this).fadeTo(200, 1.0);}
	);
});
