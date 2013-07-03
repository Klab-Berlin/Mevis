var config = {
    pidfile: false,
    id: 'ngetherSpot00_9999_1229',
    socketServer: {
        host: '127.0.0.1',
        port: 8888
    },
    poolIds: [ 'spots', 'meshNode', 'demoMaster', 'ngfs' ],
    initiallyConnectTo: {
        /* yodaMU01_12000: {
      id: 'yodaMU01_12000',
      host: '192.168.1.125',
      port: 12000
    }

    ngetherSpot00_9999_1229: {
            id: 'ngetherSpot00_9999_1229',
            host: '192.168.1.125',
            port: 9999,
            password: 'ngether'
        } */
    },
    authSettings: {
        useWhiteList: false,
        whiteList: [ 'aSpotId' ],
        usePassword: true,
        password: 'ngether',
        useBlackList: false,
        blackList: [ 'aSpotId' ]
    },
    // replPort: 1229,
    // autoReconnect: true,
    // reconnectInterval: 5000,
    maxConnectAttempts: 100,
    loggingConfig: {
        log2file: false,
        logfile: 'ngetherSpot00_9999_1229.log',
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
        // 'ngetherPlugin.wrapAroundSocket'
        // 'ngetherPlugin.receiveMeshWorkNodes',
        // 'ngetherPlugin.sendMeshWorkNodes',
        // 'ngetherPlugin.understandEventEmitted',
        // 'ngetherPlugin.mongodb',
        // 'ngetherPlugin.ngetherFS',
        // 'ngetherPlugin.fil7eTransfer',
        // 'ngetherPlugin.mail',
        // 'ngetherPlugin.panicMail',
        // 'ngetherPlugin.myprocess',
        // 'ngetherPlugin.checkDBconnection',
        // 'ngetherPlugin.replConvenience',
        // 'ngetherPlugin.latency',
        // 'ngetherPlugin.checkHttpResponse',
        // 'ngetherPlugin.simpleAuth'
    ],
    // sendMeshWorkNodes: {
    //     shoutOutInterval: 600000
    // },
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
    checkDBSettings: {
        dbsToCheck: [ 'logger' ]
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
    myProcess: {
        killKey: '123'
    },
    dbsToCheck: [ 'logger' ],
    latency: {
        requestLatencyInterval: 10000
    },
    checkHttpResponse: {
    urlsToCheck: [
            /*
            {
                url: 'http://www.meinunterricht.de:80/',
                interval: 30000,
        addressesToMail: [ 'toni@meinunterricht.de' ],
        lastStatus: true
            }
            */
        ]
    },
    ngfs: {
        storagePath: '/home/itsatony/code/ngether/demo/ngfs0/'
    }
};

module.exports = config;
