$(document).ready(function() {
	$('#add-items').keyup(function() {
		console.log($(this).val());
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
    	console.log('click li');
    	$(this).addClass("strikethrough");
    })

});
/* */