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
	
	//this part for flats filter
	$(".block__filter__apartment" ).change(function() {
		var selectOpt = $(this).text();
		console.log(selectOpt);
		if (selectOpt == 'Житловий масив “Затишок Дніпра ”'){
				$('.house-green').show();
				$('.house-yellow').hide();
			} else if(selectOpt=='Жовтий масив'){
				$('.house-green').hide();
				$('.house-yellow').show();
			}
	});
	
	
	
	var arr_Green =$.ajax({
		url: "js/green.json",
		dataType: "json",
		type: 'get',
		catch: false,
		success: function(data){
			var items = [];
			
			$(data).each(function(i, value){

				items.push('<li class="'+ "room_" + value.room + " balcon_" + value.blacon +'  ">' +value.namber + '</li>');
				
			})

			$('<ul/>', {
				'class': 'house-green',
				html: items.join('')
			 }).appendTo(".flats");
			
		}
	});
	
	var arr_Yellow =$.ajax({
		url: "js/yellow.json",
		dataType: "json",
		type: 'get',
		catch: false,
		success: function(data){
			var items = [];
			
			$(data).each(function(i, value){

				items.push('<li class="'+ "room_" + value.room + " balcon_" + value.blacon +'  ">' +value.namber + '</li>');
				
			})

			$('<ul/>', {
				'class': 'house-yellow',
				html: items.join('')
			 }).appendTo(".flats");
			
		}
	});
	
	$("#balcon").click(function(){
		$( "ul" ).find('.active').removeClass('active');
		
		if($("input[type='radio']").hasClass('act')){
			$("input[type='radio']").click();
			console.log('ok')
						
		} else if($(this).prop('checked')){
			$( "ul" ).find('.balcon_true').addClass('active');
		}
		
			
		
	});
	
	$("input[type='radio']").click(function(){
		$( "ul" ).find('.active').removeClass('active act');
		var cls = '.' + $(this).prop("class");
		$("input[type='radio']").removeClass('act');
		$(this).addClass('act');
		console.log(cls);
		
		if($("#balcon").prop('checked')){
			$( "ul" ).find('.balcon_true'+ cls).addClass('active');
			
		} else{
			$( "ul" ).find(cls).addClass('active act');
		}
	});
	
})
