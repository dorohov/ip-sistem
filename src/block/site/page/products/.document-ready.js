'use strict';
$(function(){
	$(document.body).on('click.azbn7', '.azbn7__ui__category-view__switch', null, function(event){
		event.preventDefault();
		var btn = $(this);
		var view_as = btn.attr('data-view_as') || 'default';
		$('.azbn7__ui__category-view')
			.hide()
			.filter('[data-view_as=' + view_as + ']')
				.fadeIn('fast')
		;
		$('.page-header__nav .page-header__nav-link').removeClass('is--active');
		btn.closest('.page-header__nav-link').addClass('is--active');
		Azbn7_Lib_Cookie.set('category-view', view_as, 86400 * 1);
	});
	$('.azbn7__ui__category-view__switch[data-view_as="' + (Azbn7_Lib_Cookie.get('category-view') || 'table') + '"]').trigger('click');
});