(function($){

	// cached DOM
	var $filter = $('#filter'),
		$info	= $('#info');

	// local templates
	var tmpl = {

		Spot	: templates.node,
		Hub		: templates.node,
		Client	: templates.client,
		Cluster	: templates.cluster
	};


	// declaration
	var current,	// node-text
		content;	// html

	// trigger
	$filter.on('change', select );



	// example request
	setTimeout( function(){

		// asnc init
		select();

	}, 300);


	// Helper
	// ======

	/**
	 * insert the data for the select node into the info box
	 */
	function select(){

		current = $filter.find('option:selected')[0].text.toLowerCase();

		mv.request( current, '*' );
	}


	// Export
	// ======

	var info = {

		update: function ( type, data ) {

			content = tmpl[ type ]( data );

			$info.html( content );
		}
	};

	mv.info = info;

})(jQuery);

