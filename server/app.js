// Modules
// =======

var engine = require('engine.io'),
	config = require('./config'),

	handle = require('./handle');

// Server
// ======

var server = engine.listen( config.port );

server.on('connection', function ( socket ) {

	handle.init( socket );

	socket.on('message', function ( msg ) {

		msg = JSON.parse( msg );

		handle[ msg.action ]( msg.id, msg.data );
	});

	socket.on('close', function(){

		handle.remove( socket.id );
	});

});

console.log('\n[*] Server is listening on port: ', config.port );
