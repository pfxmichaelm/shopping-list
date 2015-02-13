$(document).ready(function() {
	$('#add-items').keyup(function(k) {
		if(k.which==13) {
			console.log($(this).val());
			item = $(this).val();
			cb = '<input type="checkbox" name="finished" value="off" />';
			rb = '<input type="radio" name="remove" value="off" />';
			$('ul').prepend('<li>' + cb + ' ' + item + ' ' + rb +'</li>');
			$(this).val('');

		};
	})
	$('ul').on('click', 'li', function() {
    	$(this).addClass("strikethrough");
    	console.log('stricken');
    })


    /*$('ul').off('click', 'li', function() {
    	$(this).css('color', 'blue');
    	$(this).css('text-decoration', 'underline');
    })*/

});