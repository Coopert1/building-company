$(function(){
	$('.bars').click(function(){
	  $(this).toggleClass('active');
	  $(".menu").animate(
		{height: 'toggle'},
		{duration:300}
	);
	})
})
