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

	// go through each group
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

		// parse the group name
		var names = group.toString().split(' ');
		var width = null;
		var height = null;
		$.each( names, function( index, name )
		{
			// check for type
			if( $.inArray( name, types ) !== -1 )
				$.extend( settings, { type: name } );

			// check for external & social
			if( name == 'external' || name == 'social' )
				$.extend( settings, { type: 'iframe' } );

			// check for width and height
			if( name == parseInt( name, 10 ) )
			{
				if( width === null ) width = parseInt( name, 10 );
				else if( height === null ) height = parseInt( name, 10 );
			}
		});

		// set width and height in markup for iframe
		if( settings.type == 'iframe' && ( width !== null && height !== null ) )
		{
			var style = 'style="position:relative;margin:auto;';
			if( width !== null ) style += 'max-width:' + width + 'px;';
			if( height !== null ) style += 'height:' + height + 'px;padding:0;';
			style += '"';
			var markup =  '<div class="mfp-iframe-scaler" '+style+'>'+
				            '<div class="mfp-close"></div>'+
				            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				          '</div>';
			$.extend( settings, { iframe: { markup: markup } } );
		}

		// init magnific popup
		$group.magnificPopup( settings );
	});
}