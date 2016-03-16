//nav-dropdown-mobile
$('.nav .menu-item-has-children a').on('click', function(e) {
	var $this = $(this);
	var $parent = $this.parent();
	var $ul = $parent.find('ul');

	if ( $ul.is(':hidden')) {
		e.preventDefault();
		$parent.addClass('active');
		$ul.addClass('active');
		$ul.slideDown();
		$parent
			.siblings()
			.removeClass('active')
			.find('ul').slideUp();
	};
});