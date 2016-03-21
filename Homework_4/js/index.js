// Create a global variable for the total

var total = 0;

// Create a function you can run when you submit the field Hint: .submit() in jQuery

$('#entry').submit(enter);


function enter(event) {

	var entry;
	var money;

	event.preventDefault();

	var entry = $('#newEntry').val();
	entry = parseFloat(entry);

	money = formatMoney(entry);

  	$('#entries').append('<tr><td></td><td>' + money + '</td></tr>');

	total = total + entry;

	$('#total').html(formatMoney(total));

	$('#newEntry').val('');

}


function formatMoney(number) {

	var money = parseFloat(number);

	money = money.toFixed(2);

	money = '$' + money;

	return money;
}





// $("#entry").on("submit", function () {

	//var amount = $('newEntry').val();

	//amount = parseFloat(amount);


	//$('#entries').append('<tr><th></th><th>' + amount + '</th></tr>');

//});

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)

//function formatPrice(price) {

    //formattedPrice = price.toFixed(2);
    //return formattedPrice;
//}