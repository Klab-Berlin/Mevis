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

	request: function ( sid, data ) {

		var type	= data.type,
			id		= data.id,

			// different caches ?
			geo		= ( id !== '*' ) ? cache[id] : null,
			info;


		if ( !geo ) {

			geo	= geoip.lookup( example.ip );
			info = example[ type ];

			cache[id] = geo;
		}

		send( 'lookup', sid, {

			marker	: {

				longitude	: geo.ll[0],
				latitude	: geo.ll[1]
			},

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
