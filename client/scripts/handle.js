(function(){

	// Export
	// ======

	var handle = {

		lookup: function( data ) {

			var marker	= data.marker,
				info	= data.info;

			// update info
			// console.log(marker);

			mv.info.update( info.type, info );
		}
	};

	mv.handle = handle;

})();
