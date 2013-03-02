/* Fluid Theme v1.0, June 22nd 2009, Metalab Design http://www.metalabdesign.com */
/* litoma Redesign http://inyoes.tumblr.com */

$(document).ready(function() {
	var loading_next_page = false;
	var new_posts = "";
	$("#more").show();
	$("#more").bind("click", function(){newPosts();});

	function newPosts() {
		if ( (next_page <= total_pages) && (! loading_next_page) ) {
			loading_next_page = true;
			$("#more").css({'background-image' : 'url(//litoma.github.com/img/bg_more.gif)'});
			jQuery.get("/page/" + next_page + "?cb="+ Math.random(), function(data) {
				new_posts = data.split('<!-- mainstart -->')[1].split('<!-- mainend -->')[0];
				$("#main").append(new_posts);
				next_page++;
				loading_next_page = false;
				$("#more").css({'background-image' : 'none'});
				if (next_page > total_pages) {$("#more").fadeOut(300);}
			});
		}
	}
});
