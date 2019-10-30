# Welcome to Marko Notif!
This is notification using socket io

# Setup

 1. Create Database
 2. Import [notif.sql](https://github.com/sayrahmat41/marko-notif/blob/master/notif.sql "notif.sql")
 3. Set config in file [index.js](https://github.com/sayrahmat41/marko-notif/blob/master/index.js "index.js")  
 4. Change into yours	

> var con = mysql.createConnection({ 	
> host: "localhost", 	
> user: "root",
> 	password: "", 	
> database: "notif" });

 5. npm install

## Run

 1. npm start

## Usage

 - Register

> socket.emit('register','user1');

 - get notif
	

>  socket.on('notif',function(data){
>         var username = data.username;
>         var message = data.message;
>       })

;

 - Send notif using js
	 

> socket.emit('notif',{
>         to : 'user2',
>         message : 'your message'
>       });

 - Send Message using CURL

>      curl -X POST \
>       http://localhost:3000/send \
>       -H 'Content-Type: application/x-www-form-urlencoded' \
>       -d 'to=user1&message=dadjgc'
```