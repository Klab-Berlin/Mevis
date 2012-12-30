(function(){

	// Export
	// ======

	var handle = {

		init: function(){

			mv.map.init();

			mv.info.select();
		},


		updateMarker: function ( data ) {

			mv.map.update( data.list );
		},


		filter: function ( data ) {

			var marker	= data.marker,
				info	= data.info;

			mv.map.update( data.marker );
			mv.info.update( info.type, info ); // example - later the first ? emty ?
		}
	};

	mv.handle = handle;

})();
