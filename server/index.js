// Modules
// =======

var webSocketConfig = require('./websocket.config.js'),
    ngetherConfig   = require('./ngether.config.js'),
    ngSpot          = require('./node_modules/ngether/lib/ngether.js'),
    bubPubSub       = require('./node_modules/bubpubsub/lib/bubpubsub.js'),

    socketServer    = require('../shared/r2d2/server/vws.socket.js').server,
    handle          = require('./scripts/handle.js'),

    scheme          = require('./example-network/scheme.js');



var dataSub = new bubPubSub('data');

var spot = new ngSpot( ngetherConfig, ready );


/**
 *  Execute after ngether-spot initalization
 */

function ready(){

  spot._bubPubSubBridge_ToLocal( dataSub );

  // internal usage of pubSub subscribe
  spot.listenTo('/request/data', function ( data ) {

    console.log('\n\n\t\t\tLISTEN:', data , '\n');
  });

  spot.broadcast('/request/data', { a: 1, b:2 });

  // establish connection with the client
  socketServer( 'mevis', setupConnection ).config( webSocketConfig );
}


// previous scheme
// dataSub.subscribe('/request/data/', function ( data ) {

//   console.log('[RECEIVED]' , data);

// }, { getBubbles: true }, 'test' );



/**
 *  Handle data streams
 *  @param  {[type]} connection [description]
 *  @param  {[type]} server     [description]
 *  @return {[type]}            [description]
 */

function setupConnection ( connection, server ) {

  connection.on('open', function ( id ) {


    connection.on('message', function ( msg ) {

      // Example data
      // spot.broadcast('/request/data', 42);

      msg = JSON.parse( msg.utf8Data );

      var response = handle[ msg.action ]( msg.data );

      connection.send( JSON.stringify( response ) );
    });


    connection.on('error', function ( err ) {
      console.log('[error]');
    });


    connection.on('close', function ( id ) {
      // console.log('[close]');
    });

  });
}
