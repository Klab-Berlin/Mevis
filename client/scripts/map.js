(function($){

	var	template = templates.marker,// template

		map = new L.Map('map'),		// map

		markers = [],				// marker collection

		current,					// temp
		i, l,						// iterators

		m = {

			init: function(){

				var	tileset = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					credits = 'Map © OpenStreetMap contributors',

					tileLayer = new L.TileLayer( tileset, {

						minZoom		: 8,
						maxZoom		: 11,
						attribution	: credits
						// reuseTiles	: true
					});

				map.setView([ 52.5, 13.4 ], 11 );

				map.addLayer( tileLayer );

				map.on('move', this.getMarker );
			},

			getMarker: function(){

				var bounds	= map.getBounds(),
					minll	= bounds.getSouthWest(),
					maxll	= bounds.getNorthEast();

				mv.request(

					{ min: minll.lng, max: maxll.lng },
					{ min: minll.lat, max: maxll.lat }
				);
			},

			update: function ( list ) {

				this.removeMarker();

				for ( i = 0, l = list.length; i < l; i++ ) {

					current = list[i];

					this.createMarker( current.data, current.info );
				}
			},

			removeMarker: function(){

				for ( i = 0, l = markers.length; i < l; i++ ) {

					map.removeLayer( markers[i] );
				}

				markers.length = 0;
			},


			// ToDo { icon: icons[data.type]...}
			createMarker: function ( data, info ) {

				var marker = new L.Marker([ data.lat, data.lng ]);

				marker.bindPopup( template({ name:data.name, details: data.details }) );

				marker.on('click', function(){

					mv.info.update( info.type, info );
				});

				map.addLayer( marker );

				markers.push( marker );
			}

		};

	mv.map = m;

})(jQuery);
