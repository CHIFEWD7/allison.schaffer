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










