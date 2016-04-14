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




// $("#amanda").on('click', function(){
// 	$(".contestant-dropdown-1").toggle();
// 	$(".amanda-bio").toggle();
// })

// $("#amber").on('click', function(){
// 	$(".contestant-dropdown-1").toggle();
// 	$(".amber-bio").toggle();
// })

// $("#becca").on('click', function(){
// 	$(".contestant-dropdown-1").toggle();
// 	$(".becca-bio").toggle();
// })

// $("#breanne").on('click', function(){
// 	$(".contestant-dropdown-1").toggle();
// 	$(".breanne-bio").toggle();
// })


// $("#caila").on('click', function(){
// 	$(".contestant-dropdown-2").toggle();
// 	$(".caila-bio").toggle();
// })
// $("#emily").on('click', function(){
// 	$(".contestant-dropdown-2").toggle();
// 	$(".emily-bio").toggle();
// })
// $("#haley").on('click', function(){
// 	$(".contestant-dropdown-2").toggle();
// 	$(".haley-bio").toggle();
// })
// $("#izzy").on('click', function(){
// 	$(".contestant-dropdown-2").toggle();
// 	$(".izzy-bio").toggle();
// })

// $("#jackie").on('click', function(){
// 	$(".contestant-dropdown-3").toggle();
// 	$(".jackie-bio").toggle();
// })
// $("#jami").on('click', function(){
// 	$(".contestant-dropdown-3").toggle();
// 	$(".jami-bio").toggle();
// })
// $("#jennifer").on('click', function(){
// 	$(".contestant-dropdown-3").toggle();
// 	$(".jennifer-bio").toggle();
// })
// $("#jessica").on('click', function(){
// 	$(".contestant-dropdown-3").toggle();
// 	$(".jessica-bio").toggle();
// })

// $("#jojo").on('click', function(){
// 	$(".contestant-dropdown-4").toggle();
// 	$(".jojo-bio").toggle();
// })
// $("#jubilee").on('click', function(){
// 	$(".contestant-dropdown-4").toggle();
// 	$(".jubilee-bio").toggle();
// })
// $("#lace").on('click', function(){
// 	$(".contestant-dropdown-4").toggle();
// 	$(".lace-bio").toggle();
// })
// $("#laura").on('click', function(){
// 	$(".contestant-dropdown-4").toggle();
// 	$(".laura-bio").toggle();
// })

// $("#lb").on('click', function(){
// 	$(".contestant-dropdown-5").toggle();
// 	$(".lb-bio").toggle();
// })
// $("#laurenb").on('click', function(){
// 	$(".contestant-dropdown-5").toggle();
// 	$(".laurenb-bio").toggle();
// })
// $("#laurenh").on('click', function(){
// 	$(".contestant-dropdown-5").toggle();
// 	$(".laurenh-bio").toggle();
// })
// $("#laurenr").on('click', function(){
// 	$(".contestant-dropdown-5").toggle();
// 	$(".laurenr-bio").toggle();
// })

// $("#leah").on('click', function(){
// 	$(".contestant-dropdown-6").toggle();
// 	$(".leah-bio").toggle();
// })
// $("#maegan").on('click', function(){
// 	$(".contestant-dropdown-6").toggle();
// 	$(".maegan-bio").toggle();
// })
// $("#mandi").on('click', function(){
// 	$(".contestant-dropdown-6").toggle();
// 	$(".mandi-bio").toggle();
// })
// $("#olivia").on('click', function(){
// 	$(".contestant-dropdown-6").toggle();
// 	$(".olivia-bio").toggle();
// })

// $("#rachel").on('click', function(){
// 	$(".contestant-dropdown-7").toggle();
// 	$(".rachel-bio").toggle();
// })
// $("#samantha").on('click', function(){
// 	$(".contestant-dropdown-7").toggle();
// 	$(".samantha-bio").toggle();
// })
// $("#shushanna").on('click', function(){
// 	$(".contestant-dropdown-7").toggle();
// 	$(".shushanna-bio").toggle();
// })
// $("#tiara").on('click', function(){
// 	$(".contestant-dropdown-7").toggle();
// 	$(".tiara-bio").toggle();
// })


$(".contestant").on("click", function(){
	var thisBio = $(this).find(".js-contestant-bio").html();
	console.log(thisBio);
	var thisDropdown = $(this).closest(".contestant-row").next(".contestant-dropdown");
	$(thisDropdown).show().html(thisBio);
});

// $(window).scroll(function(){
// 	console.log($(".js-contestant-dropdown").offset());

// 	if($(window).scrollTop() > 400) {

// 	}
// });	

var waypoint = new Waypoint({
  element: document.getElementById('homepage-contestants'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})

