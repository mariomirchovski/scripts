;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$win.on('load', function () {
		Sliders();
	});

	function Sliders() {
		SliderInit({
			slider: '.slider-name'
		});

		SliderInit({
			slider: '.slider-name',
			res1024: 5,
			res768: 3,
			res0: 1,
			mouse: false
		});
	};

	function SliderInit( options ){
		var options = jQuery.extend({
			slider: '.slider-selector',
			res1024: 1,
			res768: 1,
			res0: 1,
			mouse: true
		}, options);

		var $slider = $(options.slider);

		if ( !$slider.length ) {
			return;
		};

		var sliderOptions = {
			loop: true,
			smartSpeed: 500,
			nav: true,
			margin: 5,
			mouseDrag: false,
			dots: true,
			responsive:{
			   0:{
				   items:1
			   },
			   768:{
				   items:1
			   },
			   1024:{
				   items:1
			   }
		   }
		}

		if ( options.mouse ) {
			sliderOptions.mouseDrag = options.mouse;
		}

		sliderOptions.responsive['0'].items = options.res0;
		sliderOptions.responsive['768'].items = options.res768;
		sliderOptions.responsive['1024'].items = options.res1024;

		$slider.owlCarousel(sliderOptions);
	}
})(jQuery, window, document);