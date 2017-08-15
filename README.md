# cs-dynaflds
A jQuery plugin to integrate dynamic input fields into any html form.

## Installing with Bower

To install cs-dynaflds with Bower:

```bash
bower install cs-dynaflds
```

## How to use

- Include ``` <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>``` just before the ```</body>``` tag

- Include ``` <script src="PATH TO YOUR JS DIRECTORY/jquery.cs-dynaflds.js"></script> ``` after the jquery include.

- Include ``` <div id="input_fields_wrap"></div> ``` within your html ``` <body></body> ``` tag

- Include ``` <link href="css/css.cs-dynaflds.css" rel="stylesheet" type="text/css" /> ``` before the ``` </head> ``` tag.

- Include ``` <link rel="stylesheet" type="text/css" href="vendors/font-awesome/css/font-awesome.min.css"> ``` before the ``` </head> ``` tag if not already integrated in your HTML DOM.

### Minimum setup

```js
$(document).ready( function() {
	$('#input_fields_wrap').cs_dynaflds({
        'max_fields' : 14,
        'field_class' : 'txt-fld',
        'field_name'  : 'myTxtFld',
        'placeholder'  : 'Enter Field Value',
        'field_type'  :  'tel', // values can be text, email, tel
    });
});
```

### max_fields

To set the total number of fields that you want to add dynamically till a maximum level.


### field_class

To specify the class name of the fields. You can specify multiple classes separated with spaces. Also you can use bootstrap classes, if you have integrated Bootstrap CSS framework into your HTML DOM.

### field_name

To specify the Name of the text fields.


### placeholder

To specify Placeholder text for the input fields.


### field_type

To specify the type of input field. You can chosse from three (3) types of fields. text, email and tel.





## Contributing

Please see [CONTRIBUTE.md](CONTRIBUTE.md) for info on contributing.

