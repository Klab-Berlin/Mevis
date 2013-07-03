(function(){

  // handle connection
  var socket = mv.socket = new Socket( 'localhost:2020', { autoReconnect: false });

  socket.on('open', function() {

    console.log('[open] - id: ', socket.id);

    mv.handle.init();


    socket.on('message', function ( msg, e ) {

      // console.log('[message]');
      mv.handle[ msg.action ]( msg.data );
    });

    socket.on('close', function ( e ) {

      console.log('[close]');
    });

    socket.on('error', function ( e ) {

      console.log('[error]');
    });

  });



  /**
   * request data from the server
   * @param  String type - cluster/node/client
   * @param  String id   - identifier
   */

  mv.request = function ( lng, lat ) {
    console.log(lng, lat);
    socket.send( 'request', { lng: lng, lat: lat } );
  };


  /**
  * filters on selection
  */

  mv.filter = function ( type, id ) {
    console.log(type, id);
      socket.send( 'filter', { type: type, id: id  } );
  };


})();
