$('.acc-head').on('click', function () {
	var $this = $(this);
	var $parent = $this.parent();
	var $body = $parent.find('.acc-body');
	
	$body
		.stop(true, true).slideToggle()
		$parent
		.toggleClass('opened')
			.siblings()
			.removeClass('opened')
			.find('.acc-head')
			.next($body).slideUp()
});