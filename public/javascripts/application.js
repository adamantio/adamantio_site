// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
	$('.topbar').scrollSpy();
	$(window).scroll(function(){
		$('.topbar').scrollSpy('refresh');
	});
});

