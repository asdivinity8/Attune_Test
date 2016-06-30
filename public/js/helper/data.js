$(document).ready(function() {
    $('#list').click(function(event){
    	event.preventDefault();
    	$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){
    	event.preventDefault();
    	$('#products .item').removeClass('list-group-item');
    	$('#products .item').removeClass('table table-striped table-bordered');
    	$('#products .item').addClass('grid-group-item');});
});