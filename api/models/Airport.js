/**
 * Airport.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name : {type : 'string'},
  	code : {type : 'string'},
  	lat : {type : 'string'},
  	lon : {type : 'string'},
  	rating : {type : 'float'},
  	city : {type : 'string'},
  	state : {type : 'string'},
  	country : {type : 'string'},
  	tz : {type : 'string'},
  	type : {type : 'string'},
  	url : {type : 'string'},
  	elev : {type : 'string'},
  	direct_flights : {type : 'integer'}
  }
};

