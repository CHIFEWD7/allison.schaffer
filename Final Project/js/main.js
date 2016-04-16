$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.hero').css('height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});



// $(document).ready(function() {
//   function scrollToAnchor(aid){
//     var aTag = $("a[name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
//   }
//   $("a").click(function() {
//     var href = $(this).attr('href').replace('#', '')
//     scrollToAnchor(href);
//   });     
// });


// var nb = $(".nav-bar");

// var height = $(".hero").height()

// $(window).scroll(function() {

// 	if( $(this).scrollTop() > height) {
// 		nb.addClass("navbar-scrolled");
// 	}
// 	else {
// 		nb.removeClass("navbar-scrolled");
// 	}

// })


$(".contestant").on("click", function(){
	var thisBio = $(this).find(".js-contestant-bio").html();
	var thisDropdown = $(this).closest(".contestant-row").next(".contestant-dropdown");
	$(thisDropdown).show().html(thisBio);
	$(thisDropdown).addClass("slideDownHeight");
});



// $(window).scroll(function(){
// 	console.log($(".js-contestant-dropdown").offset());

// 	if($(window).scrollTop() > 400) {

// 	}
// });	

var waypoint = new Waypoint({
  element: $('.homepage-about'),
  handler: function() {
    $('.js-contestant-dropdown').hide();
  },
  offset: -200
})

var waypoint = new Waypoint({
  element: $('.footer'),
  handler: function() {
    $('.js-contestant-dropdown').hide();
  },
  offset: 'bottom-in-view'
})


 
$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $("#girls").addClass("checked");
        console.log ("label");
    } else {
        $('label').removeClass("checked");
    }
});



var limit = 2;
$('input.team-members').on('change', function(evt) {
   if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
   }
   // console.log($('input.team-members').children());
});