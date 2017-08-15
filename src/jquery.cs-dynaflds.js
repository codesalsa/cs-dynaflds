(function($) {

    $.fn.cs_dynaflds = function(options) {

    	var basewrap = this;

    	var settings = $.extend({
            'max_fields' : 10,
            'add_button' : $(".add_field_button"),
            'field_class' : 'txt-fld',
            'field_name'  : 'myTxtFld',
            'placeholder'  : 'a',
            'field_type'  :  'text',
        }, options);

    	//Settings
        
        var max_fields = settings['max_fields'];
        var add_button = settings['add_button'];

        var field_class = settings['field_class'];
        var field_name = settings['field_name'];

        var placeholder = settings['placeholder'];
        var field_type = settings['field_type'];

        var initialfld = 1; //initlal text box count

        jQuery(basewrap).html('<a class="add_field_button">Add Fields</a><div class="field-wrap"><input type="'+field_type+'" name="'+field_name+'[]" class="'+field_class+'" placeholder="'+placeholder+'"></div>');

        $(basewrap).on('click', '.add_field_button', function(e){
	        e.preventDefault();
	        if(initialfld < max_fields){ 
	            initialfld++;
	            $(basewrap).append('<div class="field-wrap"><input type="'+field_type+'" name="'+field_name+'[]" class="'+field_class+'" placeholder="'+placeholder+'" /><a href="#" class="remove_field"></a></div>');
	        }
	    });

	    $(basewrap).on("click",".remove_field", function(e){
	        e.preventDefault(); 
	        $(this).parent('div').remove(); 
	        initialfld--;
	    });
    }
}(jQuery));