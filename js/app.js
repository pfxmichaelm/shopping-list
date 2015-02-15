$(document).ready(function() {
	$('#add-items').keyup(function() {
	}).keyup(function(k) {
		if(k.which==13) {
			console.log($(this).val());
			item = $(this).val();
			cb = '<input type="checkbox" value="off" />';
			$('ul').prepend('<li>' + cb + ' ' + item + '</li>');
			$(this).val('');
		};
	})

	$('ul').on('click', 'li', function() {
		$(this).toggleClass('strikethrough');
	})

	$('.reset').click(function() {
			console.log('reset list');
			$('li').remove();
	})

	$('.remove').click(function() {
		if($('li').hasClass('strikethrough')) {
			console.log('remove items');
			$('li.strikethrough').remove();
		}
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