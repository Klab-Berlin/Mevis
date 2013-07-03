// Modules
// =======

var geoip   = require('geoip-lite'),
    example = require('./example');

// Declaration
// ===========

var cache = {};


// Export
// ======

var handle = {


  request: function( data ) {

    var list = [];

    list.push( example.klab );

    return { action: 'updateMarker',  data: { list: list  } };
  },


  filter: function ( data ) {

    var type  = data.type,
        id    = data.id,

        // different caches ?
        geo   = ( id !== '*' ) ? cache[id] : null,
        list  = [],

        info;


    if ( !geo ) {

      geo = geoip.lookup( example.ip );


      // will be provided by the ngether network !
      info = example[ type ];

      cache[id] = geo;
    }

    list.push( example.klab );

    return { action: 'filter', data: { marker: list, info: info } };
  },


  set: function ( info ) {

    // provides the content of 'example/info'
    console.log('[info]');
    console.log(info);
  }

};

module.exports = handle;
