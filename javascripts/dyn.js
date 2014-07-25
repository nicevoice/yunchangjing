
//load all pages dynamically into a container

$(function(){

	if(Modernizr.history) {
	
		$(".work").delegate("click", function(){
			_href = $(this).attr("href");
			history.pushState(null, null, _href);	
			//use function 
			loadContent(_href);
			return false;
	
		});

			
			
			function loadContent(href) {
				var titleWrap 	= $(".title-wrap");
				var theNav 		= $("nav");
				var pageWrap  	= $("#page-wrap");
				
				theNav.fadeOut(100);
				titleWrap.fadeOut(500);
				
				pageWrap.find("#inner-wrap").fadeOut(500,function(){
					pageWrap.hide().load(href + " #inner-wrap", function(){
							pageWrap.fadeIn(700);
					});
					console.log(href);	
				});
				
				$(window).bind('popstate', function(){
					link = location.pathname.replace(/^.*[\\\/]/, '');
					loadContent(link);
				});
				
				$(".close").click(function(e){
					e.preventDefault();
					$('.page-wrap').fadeOut(700);
				});
					
			}

	
	} else {
	
	}
});






