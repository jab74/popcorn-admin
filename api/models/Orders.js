/**
* Orders.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/



var tablize = require('sd-datatables');

module.exports = {
  ///
  // Attributes
  ///

  attributes: {
    orderStatus: {
      type: 'integer',
      required: true
    },
		customerId: {
      type: 'string',
      required: true
    },
		discount: {
      type: 'float',
      required: false
		}
  },

};

tablize(module.exports);

