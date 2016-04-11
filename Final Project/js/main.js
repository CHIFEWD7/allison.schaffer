var nb = $(".nav-bar");

$(window).scroll(function() {

	if( $(this).scrollTop() > 670) {
		console.log(scroll)
		nb.addClass("navbar-scrolled");
	}
	else {
		nb.removeClass("navbar-scrolled");
	}

})


$("#amanda").on('click', function(){
	$(".contestant-dropdown-1").toggle();
	$(".amanda-bio").toggle();
})

$("#amber").on('click', function(){
	$(".contestant-dropdown-1").toggle();
	$(".amber-bio").toggle();
})

$("#becca").on('click', function(){
	$(".contestant-dropdown-1").toggle();
	$(".becca-bio").toggle();
})

$("#breanne").on('click', function(){
	$(".contestant-dropdown-1").toggle();
	$(".breanne-bio").toggle();
})

