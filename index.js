//index.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use((req, res, next) => {
	console.log(req.headers)
	next()
})

app.use((req, res, next) => {
	req.chance = Math.random()
	next()
})

app.get('/', (req, res) => {
	//res.json({
	//	chance: req.chance
	//})
	res.render('index.html');
})

app.post('/', function(req,res){
	console.log(req.body);
	res.send('username: '+req.body.username);//+req.body.username);
});

app.listen(3000)
