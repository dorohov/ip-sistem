'use strict';

$(function() {
	
	var yandex_map_div_id = 'yandex-map';
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';
	
	var yandex_map = $('#' + yandex_map_div_id);
	var yandex_map_data = JSON.parse(yandex_map.attr('data-map') || '{}');
	
	/*
	{
		"center" : [52.960419, 36.070],
		"zoom" : 16,
		"placemarks" : [
			{
				"coord" : [52.960186, 36.0715],
				"city" : "г. Орёл",
				"adr" : "ул. Гагарина, д. 23, оф. 19а",
				"phone" : {
					"tel" : "+74862630457",
					"human" : "+7 (4862) <b>63-04-57</b>"
				}
			}
		]
	}
	*/
	
	var 
		map_area_center = {		
			center: yandex_map_data.center, // расположение района
			zoom: yandex_map_data.zoom,
			//controls: ['smallMapDefaultSet'],
			controls: []
		},
		map_area_block;
	
	var initYandexMapGlonass = function() {
		
		var _pm = yandex_map_data.placemarks[0];
		
		map_area_block = new ymaps.Map(yandex_map_div_id, map_area_center, {
			//searchControlProvider: 'yandex#search'
		});		
		map_area_block.behaviors.disable('scrollZoom');
	    var polygonLayoutCenter = ymaps.templateLayoutFactory.createClass('<div class="contacts-block__map-container"><div class="contacts-block__map-icon"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="' + CMS__TPL_PATH + '/img/svg/sprite.svg#map-location"></use></svg></div><div class="contacts-block__map-layout"><div><b>' + _pm.city + '</b></div><div class="contacts-block__map-address">' + _pm.adr + '</div><div><b>Тел.:</b> <a href="tel:' + _pm.phone.tel + '">' + _pm.phone.human + '</a></div></div></div>');
		//var map_placemark_center = new ymaps.Placemark([52.9614, 36.0726], {
		var map_placemark_center = new ymaps.Placemark(_pm.coord, {
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

	if(yandex_map.length) {		
		ymaps.ready(initYandexMapGlonass);		
	}
});