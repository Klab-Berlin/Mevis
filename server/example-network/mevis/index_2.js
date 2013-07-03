// Modules
// =======

var webSocketConfig = require('./websocket.config2.js'),
    ngetherConfig   = require('./ngether.config2.js'),
    ngSpot          = require('./submodules/ngether/lib/ngether.js'),
    bubPubSub       = require('./submodules/bubPubSub/lib/bubpubsub.js'),

    socketServer    = require('../shared/submodules/r2d2/server/vws.socket.js').server,
    handle          = require('./lib/handle'),

    scheme          = require('./example-network/scheme.js');



var dataSub = new bubPubSub('data');


var spot = new ngSpot( ngetherConfig, ready );


function ready(){

  spot._bubPubSubBridge_ToLocal( dataSub );

  // internal usage of pubSub subscribe
  spot.listenTo('/request/data', function ( data ) {

    console.log('\n\n\t\t\tLISTEN:', data , '\n');
  });

  spot.broadcast('/request/data', { a: 1, b:2 });

  // establish connection with the client
  // socketServer( 'mevis', setupConnection ).config( webSocketConfig );
}




dataSub.subscribe('/request/data/', function ( data ) {
  console.log('[RECEIVED]' , data);

}, { getBubbles: true }, 'test' );


function setupConnection ( connection, server ) {

  connection.on('open', function ( id ) {


    connection.on('message', function ( msg ) {

      spot.broadcast('/request/data', '222222');

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


















// initial data from the mesh ? or not on bootstrapping but later through the event ?
// handle.set( spot );



// retrieve ngether data, pipe/push them to the client automaticly (?)
// how accesing - retrieving the data ?
// spot.subscribe( '/test/', function ( data ) {

//   console.log('[received]');
//   console.log(data);
                    // - active update, towards all connections !
  // handle.set();  // - persisstent cache - on request


// }, { getBubbles: true }, 'test' );



// not user, but code testing !

// var wrapSocket = spot.loadPlugin('ngetherPlugin.wrapSocket');

// using an escalator - to bridge events between the call and this module
// wrapAroundSocket.executor( function ( connection, server ) {

// create a connection with the client (data exchange)

// var connect = require('connect'),
//	cache	= require('connect-cache'),
//	http	= require('http');
