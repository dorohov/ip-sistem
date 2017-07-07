'use strict';

$(function() {
	
	var 
		map_area = $('#yandex-map'), 
		map_area_center = {		
			center: [52.960419, 36.070], // расположение района
			zoom: 16,
			//controls: ['smallMapDefaultSet'],
			controls: []
		},
		map_area_block;
	
	var initYandexMapGlonass = function() {
		
		map_area_block = new ymaps.Map('yandex-map', map_area_center, {
			//searchControlProvider: 'yandex#search'
		});		
		map_area_block.behaviors.disable('scrollZoom');
	    var polygonLayoutCenter = ymaps.templateLayoutFactory.createClass('<div class="contacts-block__map-container"><div class="contacts-block__map-icon"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="/img/svg/sprite.svg#map-location"></use></svg></div><div class="contacts-block__map-layout"><div><b>г. Орёл</b></div><div class="contacts-block__map-address">ул. Гагарина, д. 23, оф. 19а</div><div><b>Тел.:</b> <a href="tel:+74862630457">+7 (4862) <b>63-04-57</b></a></div></div></div>');
		//var map_placemark_center = new ymaps.Placemark([52.9614, 36.0726], {
		var map_placemark_center = new ymaps.Placemark([52.960186, 36.0715], {
			hintContent: ''
		}, {
			iconLayout: polygonLayoutCenter
		});


		map_area_block
			.geoObjects
				.add(map_placemark_center)
		;			
		map_area_block .geoObjects;
			
	};

	if(map_area.length) {		
		ymaps.ready(initYandexMapGlonass);		
	}
});