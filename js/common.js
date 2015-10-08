head.ready(function() {

	var pane = $('.js-scroll-pane');
	if (pane.length) {
		pane.each(function () {
			var this_ = $(this),
				settings = {
					showArrows: true
				};
			// init scroll
			this_.jScrollPane(settings);
			var api = pane.data('jsp'),
				i = 1;

			setInterval(function() {
				api.reinitialise();
			}, 0.1);
		});
	};
	
	$('.js-scroll').jScrollPane();
	// 703
	// height slide
	function heightSlide() {
		var windHeight 	= $(window).height(),
			header 		= $('.header').height(),
			menuWrap 	= $('.menu-wrap').height(),
			footer 		= $('.footer').height(),
			allHeights 	= header + menuWrap + footer,
			slide 		= $('.slide'),
			bets 		= $('.bet').length,
			bet 		= $('.bet').height(),
			slideHeight = (windHeight - allHeights - 35),
			topperHeight = $('.ground').height();

		var array = [];
		$('.bet').each(function(){
			var h = $(this).outerHeight();
			array.push(h);
		});

		var counter = 0;
		for (i = 0; i < bets; i++) {
			counter = counter + array[i] + 4;
			if (counter > slideHeight) {
				counter = counter - array[i] + topperHeight;
				slide.height(counter);
				break;
			};
		};
	} heightSlide();

});