$(document).ready(function() {
	$('#add-items').keyup(function() {
		console.log($(this).val());
	}).keyup(function(k) {
		if(k.which==13) {
			console.log($(this).val());
			item = $(this).val();
			cb = '<input type="checkbox" value="1" />';
			rb = '<input type="radio" value="0" />';
			$('ul').prepend('<li>' + cb + item + rb +'</li>');
			$(this).val('');
			/*$('<input type="checkbox" value="1" />').prependTo('li');*/
		};
	})

    $('ul').on('click', 'li', function() {
    	console.log('click li');
    	var $ctrl = $('li').attr({ type: 'checkbox', name: 'chk'}).addClass("chk");
    	$('list-area').append($ctrl);
    })

});