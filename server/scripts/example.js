// Export
// ======

var example = {

	ip: '88.72.237.61',

	klab: {

		data	: {

			lat		: 52.5167,
			lng		: 13.4,
			name	: 'KLab-Berlin',
			details	: 'Immer am Unterrichten'
		},

		info	: {

			type	: 'Cluster',
			id		: '42',
			city	: 'Berlin/Würzburg',
			area	: 'The Internet',
			country	: 'Deutschland',
			nodes	: 16
		}
	},

	spot	: { // node

		type		: 'Spot',
		id			: 'muAPISpot01_4021_1421',
		ng_port		: 4021,
		repl_port	: 1421,
		ipv4		: '192.168.1.125',
		ipv6		: '123.456.7.890',
		city		: 'Berlin',
		area		: 'Berlin',
		country		: 'Deutschland',
		memory		: 20,
		cpu			: 10,
		clients		: 2
	},

	hub		: { // node

		type		: 'Hub',
		id			: 'muAPISpot01_4021_1421',
		ng_port		: 4021,
		repl_port	: 1421,
		ipv4		: '192.168.1.125',
		ipv6		: '123.456.7.890',
		city		: 'Berlin',
		area		: 'Berlin',
		country		: 'Deutschland',
		memory		: 20,
		cpu			: 10,
		clients		: 2
	},

	client	: {

		type		: 'Client',
		id			: 'vwcmu12345',
		ipv4		: '192.168.1.125',
		city		: 'Würzburg',
		area		: 'Bayern',
		country		: 'Deutschland',
		email		: 'a@b.de',
		_id			: 1234,
		userType	: 1,
		time		: '12 min',
		desks		: 4,
		documents	: 18
	},

	cluster	: {

		type		: 'Cluster',
		id			: 'cluster_01',
		city		: 'Berlin',
		area		: 'Berlin',
		country		: 'Deutschland',
		nodes		: 1
	}
};

module.exports = example;
