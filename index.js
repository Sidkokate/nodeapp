var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('giyan hai aap');
=======
 res.send('aa rha hoo main ');
>>>>>>> 65a453f20486fd66f8d3ce020258be934b22218e
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
