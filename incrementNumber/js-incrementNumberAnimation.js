;(function($, window, document, undefined) {
	var isScrolabal = false;
	
	$(window).on('scroll', function(){
		if ( isScrolledIntoView($('.section-stats')) === true && isScrolabal===false ) {
			isScrolabal = true;
			incrementNumberAnimation( $('.increment-number') );
		} 
	});

	function isScrolledIntoView(elem) {
		if (typeof( $('.section-stats') ) === 'undefined' || !$('.section-stats').length ) {
			return false;
		}
		var docViewTop = $win.scrollTop();
		var docViewBottom = docViewTop + $win.height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	};

	function incrementNumberAnimation($el) {
		$el.each(function(){
			var to = $(this).data('increment-to');
			$(this)
				.prop('number', 0)
				.stop()
				.animate(
				{ number: to }, 

				{
					duration: $(this).data('increment-duration'),
					easing: 'swing',

					step: function() {
						$(this).text(Math.ceil(this.number).toString().replace(/./g, function(match, offset, string) {
							return offset && ((string.length - offset) % 3 === 0) ? ',' + match : match;
						}));
					}
				}
			);
		});
	};
})(jQuery, window, document);
