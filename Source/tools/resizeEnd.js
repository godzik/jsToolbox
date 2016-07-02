var resizeEvt;
$window.on("resize", function() {
	currentWidth = $window.innerWidth();
	clearTimeout(resizeEvt);
	resizeEvt = setTimeout(function() {
	if (currentWidth < bpSm) {
		$parallaxInner.imageScroll('destroy');
		parallaxOff();
	} else {
		$parallaxInner.imageScroll('destroy');
		parallaxOn();
	}
	}, 250);
});