$(document).ready(function(){
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 ){
			$('.secciones').css('opacity', '0');
		}else{
			$('.secciones').css('opacity', '1');
		}
	});
});