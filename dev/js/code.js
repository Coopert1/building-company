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

	// When the user scrolls down 480px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
			document.getElementById("btn__up").style.display = "inline-block";
		} else {
			document.getElementById("btn__up").style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document


	function topFunction() {
		var val_scroll = document.body.scrollTop;
		//var val_scroll_1 = document.documentElement.scrollTop;

		var time = 50;
		var step = val_scroll/time;
		var timer = setInterval(function(){
			val_scroll = val_scroll - step;
			document.body.scrollTop = val_scroll; // For Safari
			//document.documentElement.scrollTop = val_scroll_1; // For Chrome, Firefox, IE and Opera
			if (val_scroll <= 0){
				clearInterval(timer);
			}
		}, (20));
	}
	document.getElementById("btn__up").onclick = topFunction;

//slider
	var Slider=$('#Slider').lightSlider({
			item: 1,
			slideMove:1,
			loop:false,
			controls:true,
			slideMargin: 10,
			autoWidth:false,
	})


//scroll
$(".menu,.slide__info,.block__description").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор бока с атрибута href
	var id  = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({scrollTop: top}, 1500);
});

});
	function initMap() {
		var uluru = {lat:48.9191304, lng: 24.7138400};
		var mark_in_map = new google.maps.LatLng(48.9188881,24.7174895);
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
			center: uluru,
			mapTypeControl: false,
			fullscreenControl:false,
			streetViewControl: false,
		});
		var marker = new google.maps.Marker({
			position: mark_in_map,
			map: map,
			icon:{
				url: "images/pin.png",
				ScaledSize: new google.maps.Size(16, 16)
				}
		});
	}
