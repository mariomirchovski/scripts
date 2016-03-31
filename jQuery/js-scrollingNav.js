$(document).ready( function () {
	scrollingNav($('.navigate'))
});

function scrollingNav($nav) {
	var link = $nav.find('a')
		currentClass = 'current';

	link.on('click',function(e){
		var hash = $(this).attr('href')
			dest = $(hash).offset().top;

		$(this).closest($nav).find('.btn-menu').removeClass('active')

		$('body,html').animate({
			scrollTop: dest - $('.header').height()
		},600,function(){
			scrollingClasses();
		});

		e.preventDefault();
	});

	function scrollingClasses(){
		$nav.find('ul').find('a').each(function(){
			var $this = $(this);
				$parent = $this.parent()
				hash = $(this).attr('href')
				dest = $(hash).offset().top - $('.header').height()
				scrollTop = $win.scrollTop();

			if(scrollTop >= dest ){
				$this.closest('.nav').find('ul').each(function(){
					$(this)
						.children()
						.removeClass(currentClass)
				});
				$parent
					.siblings()
					.removeClass(currentClass);
				$parent.addClass(currentClass)
			}else{
				$(this).parent().removeClass(currentClass)
			}
		});
	}

	scrollingClasses();

	$win.on('scroll',function(){
		scrollingClasses();
	});
};