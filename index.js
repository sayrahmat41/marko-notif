var app = require('express')();
var bodyParser     = require("body-parser");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//mysql connection

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "notif"
});



app.get('/connectedUsers', function(req, res){
	con.query("SELECT * FROM socketlist order by username", function (err, result, fields) {
		if (err) throw err;
			//console.log(result);

			res.send(JSON.stringify(result));
		});
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/send', function(req, res){
	var to = req.body.to;
	var message = req.body.message;
	//io.emit('notif', { 'to':to,'message':message});
	con.query("SELECT * FROM socketlist WHERE username='"+to+"'", function (err, result, fields) {

		for (var i = 0; i < result.length; i++) {
			io.to(result[i]['socketid']).emit('notif', {
				username : "socket.username",
				message : message
			});
				//console.log(result.username[i]);
			}
			//if (err) throw err;
			//console.log(result[0]);

			//res.send(JSON.stringify(result));
		});

	res.send({status:'sukses'});
});

io.on('connection',function(socket){

	socket.on('register',function(username){
		socket.username = username;
		var sql = "INSERT INTO socketlist (username, socketid) VALUES ('"+socket.username+"', '"+socket.id+"')";
		con.query(sql, function (err, result) {
			//if (err) throw err;
			//console.log("1 record inserted");
		});
		

	});

	socket.on('disconnect', () => {
		var sql = "DELETE FROM socketlist WHERE socketid = '"+socket.id+"'";
		con.query(sql, function (err, result) {
			if (err) throw err;
			//console.log("Number of records deleted: " + result.affectedRows);
		});

	});


	socket.on('notif',function(data){
		const to = data.to,
		message = data.message;
		con.query("SELECT * FROM socketlist WHERE username='"+to+"'", function (err, result, fields) {
			
			for (var i = 0; i < result.length; i++) {
				io.to(result[i]['socketid']).emit('notif', {
					username : socket.username,
					message : message
				});
				//console.log(result.username[i]);
			}
			//if (err) throw err;
			//console.log(result[0]);

			//res.send(JSON.stringify(result));
		});

		// if(connectedUsers.hasOwnProperty(to) ){

		// 	for (var i = connectedUsers[to].length - 1; i >= 0; i--) 
		// 	{

		// 		if(connectedUsers[to].hasOwnProperty(i) ){
		// 			io.to(connectedUsers[to][i].id).emit('private_chat', {
		// 				username : socket.username,
		// 				message : message
		// 			});

		// 		}

		// 	}


		// }

	})

});


http.listen(port, function(){
	console.log('listening on *:' + port);
});
