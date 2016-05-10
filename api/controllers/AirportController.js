/**
 * AirportController
 *
 * @description :: Server-side logic for managing airports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'List' : function(req, res){

		var filter_str = req.param('filter', 'name');

		var page_number = req.param('page', 1);

		if(isNaN(page_number) || page_number > 32678)
			page_number = 1;

		var sort_filter = '';

		switch (filter_str){
			case 'name':
					sort_filter = 'name ASC';
					break;
			case 'direct_flight':
					sort_filter = 'direct_flights DESC'
					break;
			case 'rating':
					sort_filter = 'rating DESC'
					break;
			case 'elevation':
					sort_filter = 'elev DESC'
					break;
			default :
					sort_filter = 'name ASC';
		}

		var type_filter = {};

		Airport.find({}).sort(sort_filter).paginate({page: page_number, limit: 10}).exec(function (err, dt){
			if(err)
				res.send({error : 'Some issue'});
			else
				res.send(dt);
		});
	},

	'Search' : function(req, res){

		var term = req.param('search', '');

		Airport.find({
		  or: [
		    { name: {contains: term}},
		    { code: {contains: term}},
		    { country: {contains: term}}
		  ]
		}).exec(function(err, data) {
			if(err)
				res.send({error : 'Some issue'});
			else
				res.send(data);
		});
		
	}
};

