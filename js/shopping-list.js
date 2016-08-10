$(document).ready(function() {
	$('#input').submit(function(event) {
		event.preventDefault();
		var something = $('#inputBox').val();
		if (something === "") {
			alert('You must enter an item!')
		}
		else {
			$('.theList ul').append("<li class='activeItem'><input id='checkBox' type='checkbox' name='status'><label for='checkBox'>" + " " + something + " " + "</label><img src='images/trash16.png' id='deleteItem'></li>");
		}
		//rests textbox
		$('#input')[0].reset();
	});

	//delete when trash can clicked

	assignlisteners () ;
	function assignlisteners () {

	$('ul').on('click', '#deleteItem', function(event) {
		console.log('item deleted by clicking trash');
		(this).closest('li').remove();
	});

	//strike through when checkbox clicked

	$("input").on('click', function() {
		console.log($('#inputBox').val() + " is checked!");
	}); //how could I log the value of the inputBox after the value changes based on what item is entered
	

}

});