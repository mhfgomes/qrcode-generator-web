const express = require('express');
const bodyParser = require('body-parser');
const qr_code = require('qrcode');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
	res.render('index');
});

app.get('/generate', function(req,res) {
	if(req.query['qrcontent'].replace(new RegExp(' ', 'g'), '') == '') {
		res.redirect('/');
		return;
	}

	qr_code.toDataURL(req.query['qrcontent'], function(err, url) {
		if(err) {
			res.redirect('/');
			return;
		}
		res.render('generate', {qrcontent: url});
	});
});

app.get('/desktop', function(req, res) {
	res.render('desktop');
});

/// WIP API support

// app.get('/api', function(req, res) {
// 	res.send("I'm Working");
// });

// app.get('/api/generate', function(req, res) {
// 	res.send("Usage /api/generate/{content}");
// });

// app.get('/api/generate/:content', function(req, res) {
// 	if(req.params.content.replace(new RegExp(' ', 'g'), '') == '') {
// 		res.redirect('/');
// 		return;
// 	}

// 	qr_code.toDataURL(req.params.content, function(err, url) {
// 		if(err) {
// 			res.redirect('/');
// 			return;
// 		}
// 		var img = Buffer.from(url, 'base64');
// 		res.send(img);
// 	});
// });

/// WIP API support

app.get('/*splat', function(req, res) {
	res.render('404');
});

app.listen(3000, () => {
	console.log("ready");
});

module.exports = app;
