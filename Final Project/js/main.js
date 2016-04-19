$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.hero-quote').css('top', windowHeight);
    $('.homepage-rules').css('top', windowHeight);
    $('.homepage-about').css('top', windowHeight);
    $('.homepage-contestants').css('top', windowHeight);
    $('.hero-quote').css('top', windowHeight);
    $('.sign-up').css('top', windowHeight);
    $('.footer').css('top', windowHeight);
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


var nb = $(".navbar");

$(window).scroll(function() {

	if( $(this).scrollTop() > 0) {
		nb.addClass("navbar-scrolled");
    $(".navbar img").show();
	}
	else {
		nb.removeClass("navbar-scrolled");
    $(".navbar img").hide();
	}

})

////////* Contestant Bio Dropdown */////


$(".contestant").on("click", function(){
	var thisBio = $(this).find(".js-contestant-bio").html();
	var thisDropdown = $(this).closest(".contestant-row").next(".contestant-dropdown");
	$(thisDropdown).show().html(thisBio);
	$(thisDropdown).addClass("slideDownHeight");
});



////////* Contestant Bio Hiding */////


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


// $(window).scroll(function(){
//  console.log($(".js-contestant-dropdown").offset());

//  if($(window).scrollTop() > 400) {

//  }
// });  



////////* Checkboxes */////


$("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).parents("label").css("background-color", "#673434").css("color", "white").css("box-shadow", "inset 0px 0px 10px rgba(0,0,0,0.9)"); 
    }else{
        $(this).parents("label").css("background-color", "#D6DBDF").css("color", "#34495E").css("box-shadow", "none");  
    }
});



// $(document).ready(function () {
//    $("input[type='checkbox']").change(function () {
//       var maxAllowed = 5;
//       var cnt = $("input[type='checkbox']:checked").length;
//       if (cnt >= maxAllowed)
//       {
//          $(this).prop("checked", "");
//          alert('Select maximum ' + maxAllowed + ' contestants!');
//      }
//   });
// });


// var limit = 2;
// $("input[type='checkbox']").on('change', function() {
//    if($(this).each(':checked').length >= limit) {
//        this.checked = false;
//    };
// });


////////* Sliding Score Information */////

$(".points-header").on("click", function() {
    $(this).next("div").slideToggle("fast", function() {
    });
});



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };








