// Declare global variable

var total = 0;

// https://api.jquery.com/submit/

$('#entry').submit(enter);

function enter() {

	//getting the value of the input with an id of #newEntry
	var entry = $('#newEntry').val();
	//
	entry = parseFloat(entry);
	currency = currencyFormat(entry);

	$('entries').append('<tr><td></td><td>')
}