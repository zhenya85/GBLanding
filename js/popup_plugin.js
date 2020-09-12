$(document).ready(function(){
   //При нажатии на ссылку с классом poplight и href атрибута тега <a> с #
	$('a.poplight[href*=\\#]').click(function() {
		var popID = $(this).attr('rel'); //получаем имя окна, важно не забывать при добавлении новых менять имя в атрибуте rel ссылки
		var popURL = $(this).attr('href'); //получаем размер из href атрибута ссылки

   //запрос и переменные из href url
		var query= popURL.split('?');
		var dim= query[1].split('&');
		var popWidth = dim[0].split('=')[1]; //первое значение строки запроса
        var hSize=80, wSize=80;

        var w=window.innerWidth; /*Узнаем ширину окна*/
        if(w<1368)popWidth=900;
        if (w<1000){
            popWidth=500;
            hSize=wSize=50;
        }
        if (w<400){
            popWidth=320;
            hSize=wSize=20;
        }
        var videoContent=document.getElementById('Video');
        videoContent.style.width=(popWidth-5)+'px';

   //Добавляем к окну кнопку закрытия
		$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" title="Закрыть" class="close"></a>');
 
   //Определяем маржу(запас) для выравнивания по центру (по вертикали и горизонтали) - мы добавляем 80 к высоте / ширине с учетом отступов + ширина рамки определённые в css
		var popMargTop = ($('#' + popID).height() + hSize) / 2;
		var popMargLeft = ($('#' + popID).width() + wSize) / 2;
 
		//Устанавливаем величину отступа
		$('#' + popID).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		//Добавляем полупрозрачный фон затемнения
		$('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE
 
		return false;
	});



	//Закрываем окно и фон затемнения
        $(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
        $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();  //плавно исчезают
            var video = document.getElementById("Video");
            video.pause();

    });

    return false;
   });

});
$(document).ready(function(){
    hSize=wSize=80;
    $('div.popup_div').click(function() {
        var popID = $(this).attr('rel').split('#'); //получаем имя окна, важно не забывать при добавлении новых менять имя в атрибуте rel ссылки
        var popWidth = popID[1].split('=')[1]; //первое значение строки запроса

        var w=window.innerWidth; /*Узнаем ширину окна*/
        if(w<900)popWidth=900;

        if (w<1000){
            popWidth=500;
            hSize=wSize=50;
        }
        if (w<400){
            popWidth=250;
            hSize=wSize=20;
        }

        //Добавляем к окну кнопку закрытия
        $('#' + popID[0]).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" title="Закрыть" class="close"></a>');

        //Определяем маржу(запас) для выравнивания по центру (по вертикали и горизонтали) - мы добавляем 80 к высоте / ширине с учетом отступов + ширина рамки определённые в css
        var popMargTop = ($('#' + popID[0]).height() + hSize) / 2;
        var popMargLeft = ($('#' + popID[0]).width() + wSize) / 2;

        //Устанавливаем величину отступа
        $('#' + popID[0]).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });
        //Добавляем полупрозрачный фон затемнения
        $('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
        $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE

        return false;
    });

    $(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
        $('#fade , .popup_div_blok').fadeOut(function() {
            $('#fade, div.close').remove();  //плавно исчезают
            var video = document.getElementById("Video");
            video.pause();

        });

        return false;
    });
});
/*Плавное перемещение по элементам меню*/
$(document).ready(function(){
    $('.nav_menu').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});