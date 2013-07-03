/**
 *  Static Server
 *  =============
 *
 *  Use node staticserver to setup the localhost and run the application without another server
 */



// Modules
// =======
var connect = require('connect'),
		cache		= require('connect-cache'),
		http		= require('http'),
		fs			= require('fs');

// Server
var port = 9000,
		tmpl = fs.readFileSync( __dirname + '/templates.js');

var staticServer = connect()

	.use( connect.responseTime() )
	.use( connect.query() )
	.use( connect.compress() )
	.use( function ( req, res, next ) {

		var output = tmpl.index();

			res.setHeader('Content-Length', output.length);
			res.end( output );
   });

http.createServer( staticServer ).listen( port, function(){

	console.log('[OPEN] - http://localhost:' + port );

	require('../index.js');
});
