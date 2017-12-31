$(function(){
	$('.bars').click(function(){
		console.log(1);
	  $(this).toggleClass('active');
	  $(".menu").animate({
		  height: 'toggle'
		});
	})
})
