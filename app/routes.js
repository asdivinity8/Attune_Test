module.exports = function(app) {
	var User = require('./models/users');
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/users',function(req,res){
		User.find({},function(err,data){
			if(err){
			  response = {"error":true,"message":"Error fetching Users"};
			}
			data = [
				{

				   "_id": "1420543620300",
				   "date": "12/12/2016",
				   "name": "Shutterbugg",
				   "active": "true"

				},
				{

				   "_id": "1420543620070",
				   "date": "14/11/2016",
				   "name": "Ankit",
				   "active": "true"

				},
				{

				   "_id": "1420543620800",
				   "date": "1/2/2016",
				   "name": "Sagar",
				   "active": "true"

				},
				{

				   "_id": "1420543622000",
				   "date": "2/3/2016",
				   "name": "Jamal",
				   "active": "true"

				}
			]
			response = {"error":false,"message":"Users fetching Succesfull",data:data};
			res.json(response);
		})
	});
	app.post('/users',function(req,res){
		var newUser = User({
  						name: req.body.name,
  						active:req.body.active,
  			});


		// save the user
		newUser.save(function(err) {
			if (err) {
				response = {"error":true,"message":"Error Saving User"};
			}
				
			response = {"error":false,"message":"Users Saved",data:req.body};
			res.json(response);	
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
};