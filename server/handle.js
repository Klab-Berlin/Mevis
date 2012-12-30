// Modules
// =======

var geoip = require('geoip-lite'),
	example = require('./example');

// Declaration
// ===========

var clients = {},
	cache = {};


// Export
// ======

var handle = {

	init: function ( socket ) {

		clients[socket.id] = socket;
	},


	request: function( sid, data ) {

		var list = [];

		list.push( example.klab );

		send( 'updateMarker', sid, {

			list: list
		});
	},


	filter: function ( sid, data ) {

		var type	= data.type,
			id		= data.id,

			// different caches ?
			geo		= ( id !== '*' ) ? cache[id] : null,
			list	= [],

			info;


		if ( !geo ) {

			geo	= geoip.lookup( example.ip );
			info = example[ type ];

			cache[id] = geo;
		}

		list.push( example.klab );

		send( 'filter', sid, {

			marker	: list,
			info	: info
		});
	},


	remove: function ( id ) {

		delete clients[id];
	}

};


// Helper
// ======


/**
 * messaging with the client
 */
function send( action, id, data ) {

	clients[id].send(JSON.stringify({

		action	: action,
		data	: data
	}));
}


module.exports = handle;
