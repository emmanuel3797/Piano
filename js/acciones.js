//JavaScript
$(document).ready(function(e) {
    $('#principal').height($().height());
	document.addEventListener("deviceready",function(){
		audio=window.plugins.LowLatencyAudio;
		
		audio.preloadFX('portadaletras','sonidos/inicio/sol.mp3', function(){},function(e){alert('Error'+e);});		
	    audio.preloadFX('portadanumeros','sonidos/inicio/la.mp3', function(){},function(e){alert('Error'+e);});	

        audio.preloadFX('imagen_letra_a','sonidos/letras/sonido_A.mp3', function(){},function(e){alert('Error'+e);});	
		audio.preloadFX('imagen_animal_a','sonidos/animales/sonido_A.mp3', function(){},function(e){alert('Error'+e);});	


				audio.preloadFX('perro','sonidos/animales/perro_uno.mp3', function(){},function(e){alert('Error'+e);});	

    $('#principal').height($('#principal').height());

$('#portadanumeros').on('tap', function (){
	audio.play ('sol');
});

$('#portadaletras').on('tap', function (){
	audio.play ('la');
});

$('#imagen_animal_a').on('tap', function (){
	audio.play ('sonido_A');
});

$('#imagen_letra_a').on('tap', function (){
	audio.play ('sonido_A');
});

$('#imagen_animal_b').on('tap', function (){
	audio.play ('sonido_B');
});

$('#imagen_letra_b').on('tap', function (){
	audio.play ('sonido_B');
});
		
		

	});
});
