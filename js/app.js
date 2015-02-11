$(document).ready(function() {

    $('ul').on('click', 'li', function() {
    	console.log('click li');
    })
    $('add-items').on('click', 'add-items', function() {
    	console.log('click add-items');
    })
    $('ul').on('enter', 'add-items', function() {
    	$('ul').prepend("<li>Prepended items</li>");
    })
});