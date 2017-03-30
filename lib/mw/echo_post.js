"use strict";
/**
 *	Object containing the middleware of /echo API
 */
module.exports = {
	"middleware1": function(req, res, next){
		console.log("inside Business Logic of /echo API");
		res.soajs.returnAPIResponse(req,res, {code: 200, error: null, data: req.body});
	}
};
