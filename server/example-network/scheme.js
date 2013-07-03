// example data
module.exports = {

  id          : 'test-server',
  version     : '0.0.0',
  startTime   : 1111,
  host        : '222',
  port        : 333,
  load        : 444,
  clients     : [{

    _id       : '4d5a46d9-3451-44ff-89f0-0cd6d3ffa938',
    handle    : '123',
    gender    : 'm',
    type      : 1111,
    firstName : 'firsterName',
    lastName  : 'lasterName',
    city      : 'berlin',
    subjects  : [ 'mathe' ],
    avatars   : 'undefined',

    screens   : [{

      linkCount: 11111,
      name: 'oneDesk',
      tags: [ 'text', 'number' ]
    }],

    rights: {

      admin : true,
      use   : false
    },

    active: true
  }],

  memory     : 555,
  ngetherId  : 'test-id',
  poolIds    : [ 'test-pool' ]
};
