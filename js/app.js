$(document).ready(function() {
	$('#add-items').keyup(function() {
	}).keyup(function(k) {
		if(k.which==13) {
			console.log($(this).val());
			item = $(this).val();
			cb = '<input type="checkbox" value="off" />';
			rb = '<input type="radio" value="off" />';
			$('ul').prepend('<li>' + cb + ' ' + item + ' ' + rb +'</li>');
			$(this).val('');
		};
	})

	$('ul').on('click', 'li', function() {
		$(this).toggleClass('strikethrough');
	})

/*    $('ul').on('click', 'li', function() {
    	if($(this).hasClass('non-strikethrough')) {
    	    $(this).addClass('strikethrough');
    	    console.log('add stricken');
    	} else {
    		$(this).addClass('non-strikethrough');
    		console.log('add non-stricken');
    	}   
    })*/

});
/* */