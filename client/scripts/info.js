(function($){

	// cached DOM
	var $filter = $('#filter'),
		$info	= $('#info');

	// local templates
	var tmpl = {

		spot	: templates.node,	// node
		hub		: templates.node,	// node
		client	: templates.client,
		cluster	: templates.cluster
	};


	// test data
	var data = {

		spot	: {

			type		: 'Spot',
			id			: 'muAPISpot01_4021_1421',
			ng_port		: 4021,
			repl_port	: 1421,
			ipv4		: '192.168.1.125',
			ipv6		: '123.456.7.890',
			city		: 'Berlin',
			area		: 'Berlin',
			country		: 'Deutschland',
			memory		: 20,
			cpu			: 10,
			clients		: 2
		},


		hub		: {

			type		: 'Hub',
			id			: 'muAPISpot01_4021_1421',
			ng_port		: 4021,
			repl_port	: 1421,
			ipv4		: '192.168.1.125',
			ipv6		: '123.456.7.890',
			city		: 'Berlin',
			area		: 'Berlin',
			country		: 'Deutschland',
			memory		: 20,
			cpu			: 10,
			clients		: 2
		},

		client	: {

			type		: 'Client',
			id			: 'vwcmu12345',
			ipv4		: '192.168.1.125',
			city		: 'Würzburg',
			area		: 'Bayern',
			country		: 'Deutschland',
			email		: 'a@b.de',
			_id			: 1234,
			userType	: 1,
			time		: '12 min',
			desks		: 4,
			documents	: 18
		},

		cluster	: {

			type		: 'Cluster',
			id			: 'cluster_01',
			city		: 'Berlin',
			area		: 'Berlin',
			country		: 'Deutschland',
			nodes		: 1
		}
	};

	// declaration
	var current,	// node-text
		content;	// html


	// init
	select();

	// trigger
	$filter.on('change', select );




	/**
	 * insert the data for the select node into the info box
	 */
	function select(){

		current = $filter.find('option:selected')[0].text.toLowerCase();

		content = tmpl[ current ]( data[ current ] );

		$info.html( content );
	}


})(jQuery);

