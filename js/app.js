$(document).ready(function() {
	$('#add-items').keyup(function() {
		console.log($(this).val());
	}).keyup(function(k) {
		if(k.which==13) {
			console.log($(this).val());
			item = $(this).val();
			$('ul').prepend('<li>' + item + '</li>');
			$(this).val('');
		};
	})

    $('ul').on('click', 'li', function() {
    	console.log('click li');
    })

});