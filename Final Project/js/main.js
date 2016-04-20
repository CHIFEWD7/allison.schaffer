$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    quoteHeight = $(".hero-quote").innerHeight();
    $('.hero-quote').css('top', windowHeight - quoteHeight);
    $('.homepage-rules').css('top', windowHeight - quoteHeight);
    $('.points').css('top', windowHeight - quoteHeight);
    $('.homepage-about').css('top', windowHeight - quoteHeight);
    $('.homepage-contestants').css('top', windowHeight - quoteHeight);
    $('.hero-quote').css('top', windowHeight - quoteHeight);
    $('.homepage-countdown').css('top', windowHeight - quoteHeight);
    $('.sign-up').css('top', windowHeight - quoteHeight);
    $('.footer').css('top', windowHeight - quoteHeight);

  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});



////////////* Sticky Nav */////////////

var nb = $(".navbar");

$(window).scroll(function() {

	if( $(this).scrollTop() > 30) {
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
	$('.contestant-dropdown').show().html(thisBio);
	$('.contestant-dropdown').addClass("slideDownHeight");
});

$(window).scroll(function() {
    if ($(this).scrollTop()>20){
        $('.contestant-dropdown').fadeOut();
     }
 });


////////* Contestant Bio Dropdown */////

// $(".contestant").on("click", function(){
//   var thisBio = $(this).find(".js-contestant-bio").html();
//   var thisDropdown = $(this).closest(".contestant-row").next(".contestant-dropdown");
//   $("thisDropdown").show().html(thisBio);
//   $(thisDropdown).addClass("slideDownHeight");
// });

////////* Contestant Bio Hiding */////


// var waypoint = new Waypoint({
//   element: $('.homepage-about'),
//   handler: function() {
//     $('.js-contestant-dropdown').hide();
//   },
//   offset: -200
// })

// var waypoint = new Waypoint({
//   element: $('.footer'),
//   handler: function() {
//     $('.js-contestant-dropdown').hide();
//   },
//   offset: 'bottom-in-view'
// })


////////* Checkboxes */////


$("input[type='checkbox']").change(function(e){
    var checkBoxes = $("input[type='checkbox']");
    var checkedBoxes = $("input[type='checkbox']:checked");
    var checkedBoxesLength = checkedBoxes.length;

    if(checkedBoxesLength <= 4){
      checkBoxes.parents("label").removeClass("disabled");
      checkBoxes.prop("disabled", false);


      if($(this).is(":checked")){
          $(this).parents("label").addClass("checked");
      }else{
        $(this).parents("label").removeClass("checked"); 
      }

    }else{
        checkedBoxes.parents("label").addClass("checked");
        checkBoxes.not(":checked").parents("label").addClass("disabled");
        checkBoxes.not(":checked").prop("disabled", true);
    }

});



////////* Sliding Score Information */////

$(".points-header").on("click", function() {
    $(this).next("div").slideToggle("fast", function() {
    });
});



$(".icon").on("click", function() {

    console.log("hi");
    $(".points-hidden").slideToggle("fast", function() {
    });
});


/*
* Basic Count Down to Date and Time
* Author: @mrwigster / trulycode.com
*/
(function (e) {
  e.fn.countdown = function (t, n) {
  function i() {
    eventDate = Date.parse(r.date) / 1e3;
    currentDate = Math.floor(e.now() / 1e3);
    if (eventDate <= currentDate) {
      n.call(this);
      clearInterval(interval)
    }
    seconds = eventDate - currentDate;
    days = Math.floor(seconds / 86400);
    seconds -= days * 60 * 60 * 24;
    hours = Math.floor(seconds / 3600);
    seconds -= hours * 60 * 60;
    minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
    hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
    minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
    seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
    if (r["format"] == "on") {
      days = String(days).length >= 2 ? days : "0" + days;
      hours = String(hours).length >= 2 ? hours : "0" + hours;
      minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
      seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
    }
    if (!isNaN(eventDate)) {
      thisEl.find(".days").text(days);
      thisEl.find(".hours").text(hours);
      thisEl.find(".minutes").text(minutes);
      thisEl.find(".seconds").text(seconds)
    } else {
      alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
      clearInterval(interval)
    }
  }
  var thisEl = e(this);
  var r = {
    date: null,
    format: null
  };
  t && e.extend(r, t);
  i();
  interval = setInterval(i, 1e3)
  }
  })(jQuery);
  $(document).ready(function () {
  function e() {
    var e = new Date;
    e.setDate(e.getDate() + 60);
    dd = e.getDate();
    mm = e.getMonth() + 1;
    y = e.getFullYear();
    futureFormattedDate = mm + "/" + dd + "/" + y;
    return futureFormattedDate
  }
  $("#countdown").countdown({
    date: "8 September 2020 09:00:00", // Change this to your desired date to countdown to
    format: "on"
  });
});






