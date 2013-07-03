/**
 *  Examples-Spot
 *  =============
 *
 *  local network of ngether spots
 */

var bubPubSub = require('../submodules/bubPubSub/lib/bubpubsub.js'),
    ngSpot    = require('../submodules/ngether/lib/ngether.js'),
    Minions   = require('../submodules/minions/lib/minions.js'),
    fs        = require('fs');

var localSub  = new bubPubSub('local'),

    minions   = new Minions(['node']);


localSub.defaults.debugging = 1;

// if ( !process.argv[2] ) return process.exit();

var config = require('./nspot0.js');


new ngSpot( config, function ( ngether ) {

  console.log(ngether);
});


// BIRDGNG A TOPIC IS POSSIBLE ?



// ngether = new ngSpot(
//   userconfig,
//   function() {
//     ngether._bubPubSubBridge_ToLocal(localBubPubSub);
//     ngether.log.add('SPOT ready for action!', 'announce', 'demoSystem');
//     ngether.eventBridge(process, 'test', 'broadcast', process, process);
//     process.on('test', function() { console.log('@@@@@@@@@@@@@@EVENT TEST @@@@@@@@@@@@@@@@@@@@@@'); console.log(arguments); } );
//     localBubPubSub.subscribe(
//       '/request/latency/',
//       function(pubData) {
//         console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
//         console.log(pubData);
//         ngether.meshBubPubSub.publish(
//           pubData.replyBranch,
//           { latency: true }
//         );
//       },
//       { getBubbles: true },
//       'test'
//     );
//     // ------------- DEMO for bridging bubpubsubs - meaning a locally published topic will be spread over the meshwork according to the targets you specify
//     localBubPubSub.subscribe(
//       '/bridgeTest',
//       function(pubData) {
//         // actually this should not happen as long as you do not force the system to target your own spot.
//         // anyways, there is a method for testing whether your own spot bridged this bubPubSub, so this is a demo for that...
//         if ( ngether.bridgedByMe(pubData) ) {
//           console.log('----------------- BOOOOHHH --------------');
//         } else {
//           console.log('---------------- YEEEEHAAAAAA -----------------');
//         }
//         console.log(pubData);
//       },
//       {},
//       'myNormalSubscriberDoingSomething'
//     );
//     // install the bridge
//     var myBridge = ngether.bridgeTopic('/bridgeTest', ['spots'], {}, ngether.localBubPubSub);
//     // ------------- sendBuffer demo
//     localBubPubSub.subscribe(
//       '/ngether/receivedBinaryBuffer',
//       function(pubData) {
//         // actually this should not happen as long as you do not force the system to target your own spot.
//         // anyways, there is a method for testing whether your own spot bridged this bubPubSub, so this is a demo for that...
//         if ( typeof pubData.fileObject === 'object'  &&  typeof pubData.fileObject.whateveryouwant === 'string' ) {
//           console.log('----------------- received Buffer ::: ' + pubData.fileObject.whateveryouwant);
//         }
//       },
//       {},
//       'myNormalSubscriberDoingSomething'
//     );

//   }
// );


ngether.bridgeTopicDemoTest = function() {
  // trigger a localBubPubSub that should be bridged
  localBubPubSub.publish('/bridgeTest/####################################', { a:1 }, {}, 'meee');
};



// a = function() {
//   ngether.storeFile('/home/itsatony/code/ngether/demo/ngfs0/testimg.jpg');
// };

// ngether.storeFile = function(path) {
//   var fileObject = this.ngetherFS.completeFileobject(path);
//   //scrap
//   console.log(fileObject);
//   fileObject.autoDB = false;
//   fileObject.autoWrite = false;
//   return this.meshBubPubSub.publish(
//     '/ngetherFS/requestFileStorage',
//     {
//       fileObject: fileObject
//     },
//     {},
//     'ng_demo.storeFile'
//   );
// };


// b = function(target) {
//   target = minions.defaultTo(target, 'ngetherSpot01_9991_1221');
//   var file = fs.readFileSync('/home/itsatony/code/ngether/demo/ngfs0/ngether_mini_logo.png');
//   ngether.ngetherFS.sendBuffer(
//    {
//       data: file, // new Buffer('testBuffer'),  // NEEDED
//       utid: '12345',  // OPTIONAL. a string, a uniqueTransferId - will be autogenerated from a timestamp and randomString if not passed
//       autoWrite: false,  // OPTIONAL.  for sendBuffer this defaults to false, for sendFile to true. if true, the receiving spots will write the file to disk
//       autoDB: false,  // OPTIONAL.  for sendBuffer this defaults to false, for sendFile to true. if true, the receiving spots will write the fileobject (w/o the data) to the DB
//       whateverYouWant: '***************************************************' // OPTIONAL.
//     },
//     ngether.getConnection(target)
//   );
// };

// ngether.latencyCheck = function(connectionNgetherId) {
//   var requestId = minions.ranomString(12);
//   var thisNgether = this;
//   var sentAt = new Date().getTime();
//   var testConversation = thisNgether.meshBubPubSub.converse(
//     {
//       topic: '/toMesh/' + connectionNgetherId +'/request/latency/' + requestId,
//       data: {
//         replyBranch: '/toMesh/' + thisNgether.config.id + '/reply/request/latency/' + requestId + '/done'
//       },
//       sender: thisNgether.config.id
//     },
//     {
//       topic: '/fromMesh/' + thisNgether.config.id + '/reply/request/latency/' + requestId + '/',
//       callback: function(pubdata) {
//         var now = new Date().getTime();
//         console.log('LATENCY WAS ' + (now - sentAt) + 'ms');
//         return true;
//       },
//       scope: thisNgether
//     }
//   );
// };
