
 // адаптивное меню
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready

// появление меню

$(document).ready(function(){
	
	$('nav').slideToggle(1200);
});

// появление картинок при скроле

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
       $('.icons img').show(1800);
    }
	
});


//прилипання меню

    $(document).ready(function () {
        var objToStick = $(".menu"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).addClass("topWindow");
            } else {
                $(objToStick).removeClass("topWindow");
            };
        });
    });





