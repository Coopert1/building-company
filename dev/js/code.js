$(function(){
	var browserMinWidth = $(document).width()
	if (browserMinWidth > 800) {
		$('.block__description').css('height', $('.block__pic').height());
	}
	$(window).resize(function() {
		var browserMinWidth = $(document).width()
		console.log(browserMinWidth);
		if (browserMinWidth > 800) {
			$('.block__description').css('height', $('.block__pic').height());
		}
	});
	//burder bittons and menu
	$('.bars').click(function(){
	  $(this).toggleClass('active');
	  $(".menu").animate(
		{height: 'toggle'},
		{duration:300}
	);
	})

})
