const express = require('express');
const bodyParser = require('body-parser');
const qr_code = require('qrcode');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
	res.render('index');
});

app.get('/generate', function(req,res) {
	qr_code.toDataURL(req.query['qrcontent'], function(err, url) {
		console.log(url);
		res.render('generate', {qrcontent: url});
	});
});

app.listen(3000, () => { 
	console.log("ready");
});

module.exports = app;