/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  datatables: function(req, res) {
    var options = req.query;

    Customers.datatables(options).sort({fName: 'asc'}).then(function(results) {
      res.send(JSON.stringify(results));
    }).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
    });
  },

	byAreaId: function(req, res) {
		Customers.findByAreaId(req.params.id).sort({fName: 'asc'}).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	byFName: function(req, res) {
		Customers.find({fName: {contains: req.params.id}}).sort({fName: 'asc', lName: 'asc', 'addresses.primary.streetNumber': 'asc', 'addresses.primary.streetName': 'asc'}).limit(20).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	byLName: function(req, res) {
		Customers.find({lName: {contains: req.params.id}}).sort({fName: 'asc', lName: 'asc', 'addresses.primary.streetNumber': 'asc', 'addresses.primary.streetName': 'asc'}).limit(20).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	byPhone: function(req, res) {
		Customers.find({phone: {contains: req.params.id}}).sort({fName: 'asc', lName: 'asc', 'addresses.primary.streetNumber': 'asc', 'addresses.primary.streetName': 'asc'}).limit(20).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	allTime: function(req, res) {
		Customers.find({}).sort({createdAt: 'asc'}).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	daily: function(req, res) {
		var today = new Date();
	
		var thisYear = today.getFullYear();
		var thisMonth = today.getMonth();
		var thisDate = today.getDate();
	
		var todayMilliseconds = new Date(thisYear, thisMonth, thisDate, 0, 0, 0, 0).getTime();
		var todayOnly = new Date(todayMilliseconds);

		Customers.find({createdAt: { '>=': todayOnly}}).sort({createdAt: 'asc'}).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	weekly: function(req, res) {
		var ts = new Date().getTime();
		var yesterday = ts - (7 * 24 * 3600000);
		var yesterdayDate = new Date(yesterday);

		Customers.find({createdAt: { '>=': yesterdayDate}}).sort({createdAt: 'asc'}).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
	monthly: function(req, res) {
		var ts = new Date().getTime();
		var yesterday = ts - (24 * 3600000 * 28);
		var yesterdayDate = new Date(yesterday);

		Customers.find({createdAt: { '>=': yesterdayDate}}).sort({createdAt: 'asc'}).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
      res.json({error: 'Server error'}, 500);
      console.error(err);
      throw err;
		});
	},
	
};

