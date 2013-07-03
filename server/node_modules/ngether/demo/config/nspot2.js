var config = {
	pidfile: false,
	id: 'ngetherSpot02_9992_1222',
	socketServer: {
		host: '127.0.0.1',
		port: 9992,
	},
	authSettings: {
		useWhiteList: false,
		whiteList: [ 'aSpotId' ],
		usePassword: true,
		password: 'ngether',
		useBlackList: false,
		blackList: [ 'aSpotId' ]
	},
	poolIds: [ 'spots', 'webserver', 'meshNode' ],
	initiallyConnectTo: {
		ngetherSpot00_9999_1229: {
			id: 'ngetherSpot00_9999_1229',
			host: '127.0.0.1',
			port: 9999
		}
	},
	sendMeshWorkNodes: {
		shoutOutInterval: 600000 
	},
	replPort: 1222,
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
		'ngetherPlugin.replConvenience',
		'ngetherPlugin.ngetherFS',
		'ngetherPlugin.fileTransfer',
		'ngetherPlugin.latency',
		'ngetherPlugin.simpleAuth'
	],
	ngfs: {
		storagePath: '../demo/ngfs2/'
	}
};


module.exports = config;