var express = require('express');
var path = require('path');
var app = express()
var fs = require('fs');
var favicon = require('serve-favicon');
var firstline = require('firstline');
var time = new Date();
var allWriting = require('./public/text/writing-posts.json');
var allProjects = require('./public/text/project-posts.json');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'public/views'));

app.listen(process.env.PORT || 8005, function() {
	console.log("We have started the server");
});

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
//app.use('/favicon.ico', express.static('public/favicon.ico'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, err) {
	res.render('index.pug');
});

app.get('/writing', function(req, res, err) {
	res.render('writing.pug', { allWriting: allWriting });
});

app.get('/projects', function(req, res, err) {
	res.render('projects.pug', { allProjects: allProjects });
})

app.get('/about', function(req, res, err) {
	res.render('about.pug');
})

app.get('/writing/:week', function(req, res, err) {
	var content = {
		title: '',
		subtitle: '',
		week: '',
		text:'',
		date:''
	};

	content = allWriting[req.params.week]
	res.render('writing-template', content);
})

app.get('/projects/:week', function(req, res, err) {
	var content = {
		title: '',
		subtitle: '',
		week: '',
		text:'',
		image: '',
		date:''
	};

	content = allProjects[req.params.week]
	res.render('project-template', content);
})
