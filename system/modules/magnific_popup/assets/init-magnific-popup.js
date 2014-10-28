function initMagnificPopup( options )
{
	// get jQuery
	var $ = jQuery;

	// check if user options are defined
	options = typeof options !== 'undefined' ? options : {};

	// get all lightbox links
	var $a = $('a[data-lightbox]');

	// determine all lightbox groups
	var groups = [];
	$a.each( function()
	{
		var $this = $(this);
		if( $.inArray( $this.data('lightbox'), groups ) === -1 )
			groups.push( $this.data('lightbox') );
	});

	// valid types
	var types = ['image','iframe','inline','ajax'];

	// go through each groups
	$.each( groups, function( index, group ) 
	{
		// default options
		var defaults = {
			type: 'image',
			gallery: { enabled: true },
		};

		// extend defaults with user options
		var settings = $.extend(true, {}, defaults, options);

		// get the elements
		var $group = $('a[data-lightbox="'+group+'"]');

		// set type if in group name
		var names = group.split(' ');
		$.each( names, function( index, name )
		{
			if( $.inArray( name, types ) !== -1 )
				$.extend( settings, { type: name } );
		});

		// set type if present in data
		if( typeof $group.data('mfp-type') !== 'undefined' )
			$.extend( settings, { type: $group.data('mfp-type') })

		// set class to wrapper if present in data
		if( typeof $group.data('mfp-class') !== 'undefined' )
			$.extend( true, settings, { callbacks: { open: function() { $('.mfp-wrap').addClass( $group.data('mfp-class') ); } } } );

		// init magnific popup
		$group.magnificPopup( settings );
	});
}