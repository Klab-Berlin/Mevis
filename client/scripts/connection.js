(function(){

	// handle connection
	var socket = mv.socket = eio( 'ws://' + config.server + ':' + config.port );

	/**
	 * socket handling
	 */
	socket.onopen = function() {

		console.log('[open] - id: ', socket.id);

		mv.handle.init();


		socket.onmessage = function ( msg ) {

			msg = JSON.parse(msg.data);

			mv.handle[ msg.action ]( msg.data );
		};

		socket.onclose = function() {

			console.log('[close]');

		};

		socket.onerror = function ( err ) {

			console.log('[error] ', err );
		};
	};


	/**
	 * request data from the server
	 * @param  String type - cluster/node/client
	 * @param  String id   - identifier
	 */
	mv.request = function ( lng, lat ) {

		socket.send( JSON.stringify({

			id		: socket.id,

			action	: 'request',
			data	: {

				lng	: lng,
				lat	: lat
			}
		}));
	};


	/**
	 * filters on selection
	 */
	mv.filter = function ( type, id ) {

		socket.send( JSON.stringify({

			id		: socket.id,

			action	: 'filter',
			data	: {

				type: type,
				id	: id
			}
		}));
	};

})();
