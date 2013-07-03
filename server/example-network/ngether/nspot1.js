var config = {
	id: 'ngetherSpot01_9991_1221',
	socketServer: {
		host: '127.0.0.1',
		port: 9991,
	},
	authSettings: {
		useWhiteList: false,
		whiteList: [ 'aSpotId' ],
		usePassword: true,
		password: 'ngether',
		useBlackList: false,
		blackList: [ 'aSpotId' ],
	},
	poolIds: [ 'spots', 'webserver', 'meshNode', 'ngfs' ],
	initiallyConnectTo: {
		/* yodaMU01_12000: {
      id: 'yodaMU01_12000',
      host: '127.0.0.1',
      port: 12000
    }, */
    ngetherSpot00_9999_1229: {
			id: 'ngetherSpot00_9999_1229',
			host: '127.0.0.1',
			port: 9999,
			password: 'ngether'
		},
		ngetherSpot02_9992_1222: {
			id: 'ngetherSpot02_9992_1222',
			host: '127.0.0.1',
			port: 9992,
			password: 'ngether'
		}
    
	},
	pidfile: false,
	replPort: 1221,
	autoReconnect: true,
	reconnectInterval: 5000,
	maxConnectAttempts: 100,
	loggingConfig: {
		log2file: false,
		logfile: 'ngetherSpot01_9991_1221.log',
		log2database: false,
		database: {
			ip: '127.0.0.1',
			port: 27017,
			name: 'logger',
			collection: 'consoleLog',
			options: {}
		},
		log2console: true
	},
	activePlugins: [
		'ngetherPlugin.receiveMeshWorkNodes',
		'ngetherPlugin.sendMeshWorkNodes',
		'ngetherPlugin.understandEventEmitted',
		'ngetherPlugin.myprocess',
		'ngetherPlugin.mongodb',
		'ngetherPlugin.mail',
		'ngetherPlugin.checkDBconnection',
		'ngetherPlugin.replConvenience',
		//'ngetherPlugin.latency',
		'ngetherPlugin.simpleAuth',
		'ngetherPlugin.ngetherFS',
		'ngetherPlugin.fileTransfer',
		//'ngetherPlugin.panicMail',
	],
	sendMeshWorkNodes: {
		shoutOutInterval: 600000 
	},
	myProcess: {
		killKey: '123'
	},
	mongoDBs: {
	    ngfsFiles: {
	      ip:         '127.0.0.1',
	      port:       27017,
	      db:         'ngetherFS',
	      name:       'ngetherFS',
	      collection: 'ngfsFiles'
	    },
		logger: {
			id: 'logger',
			ip: '127.0.0.1',
			port: 27017,
			name: 'logger',
			collection: 'consoleLog',
			options: {}
		}
  },
	mailSettings: {
		mode: 'SMTP',
		auth: {
			service: 'Gmail',
			auth: {
				user: 'mu.yoda.panic@gmail.com',
				pass: 'aALqYUirpS0tkWeTw-1e'
			}
		}
	},
	panicMailSettings: {
		delayAfterDisconnect: 30000,
		addressesToMail: [ 'toni@viserion.com', 'frederik.rudeck@klab-berlin.com', 'paul.nordmann@klab-berlin.com', 'christian.spruch@klab-berlin.com' ]
	},
	checkDBSettings: {
		dbsToCheck: [ 'logger', 'ngfsFiles' ]
	},
	ngfs: {
		storagePath: '/home/itsatony/code/ngether/demo/ngfs1/'
	}
};


module.exports = config;