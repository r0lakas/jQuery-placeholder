// IE 9 and lower placeholders

// for inputs
function addPlaceholder(selector,value){

	if( $(selector).val() == '' ){
		$(selector).val(value);	
		$(selector).addClass('placeholdercolor');
	}
	
	//pries ivedant
	$(selector).focus(function()
	{
		if($(this).val() == value ) {
			  $(this).val("");
			   //console.log('focus');
			   $(selector).removeClass('placeholdercolor');
		}
	});
	
	//po ivedimo
	$(selector).blur(function()
	{
		if( !$(this).val() ) {
			  $(this).val(value);
			  //console.log('blur');
			  $(selector).addClass('placeholdercolor');
		}
	});
	

}

// for textaarea
function addPlaceholderArea(selector,value){

	if( $(selector).text() == '' ){
		$(selector).text(value);
		$(selector).addClass('placeholdercolor');
	}
	
	//pries ivedant
	$(selector).focus(function()
	{
		if($(this).text() == value ) {
			  $(this).val("");
			   //console.log('focus');
			   $(selector).removeClass('placeholdercolor');
		}
	});
	
	//po ivedimo
	$(selector).blur(function()
	{
		if( !$(this).text() ) {
			  $(this).text(value);
			  //console.log('blur');
			  $(selector).addClass('placeholdercolor');
		}
	});
	

}

$(function() {

	$('input').each(function(){		
		var selector = jQuery(this).attr('id');
		var placeholder = jQuery(this).attr('placeholder');
			
		if (selector && placeholder){
			//console.log(selector,placeholder);
			addPlaceholder('#'+selector, placeholder);
		}
	});	

	$('textarea').each(function(){		
		var selector = jQuery(this).attr('id');
		var placeholder = jQuery(this).attr('placeholder');
			
		if (selector && placeholder){
			//console.log(selector,placeholder);
			addPlaceholderArea('#'+selector, placeholder);
		}
	});		
	
});