
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var marine=require("./routes/index");
var app = express();

//app.use("/marine/getData", require("./routes/index.js"));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));




// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/marine',marine.paramRead);
//app.get('/aquaculturist',marine.paramRead);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// 




app.get('/Oceanography', function(req, res) {
	   res.render('presentation/oceanography', { });
	});

app.get('/OceanEngineering', function(req, res) {
	   res.render('presentation/oceanEngineering', { });
	});

app.get('/MarineBiologist', function(req, res) {
	   res.render('presentation/marineBiiologist', { });
	});

app.get('/MarineEchologist', function(req, res) {
	   res.render('presentation/marineEchologist', { });
	});


app.get('/BiologyResearcher', function(req, res) {
	   res.render('presentation/biologyResearcher', { });
	});

app.get('/UnderwaterArcheologist', function(req, res) {
	   res.render('presentation/underwaterArcheologist', { });
	});

app.get('/Aquaculturist', function(req, res) {
	   res.render('presentation/aquaculturist', { });
	});

app.get('/Fisherman', function(req, res) {
	   res.render('presentation/fisherman', { });
	});


app.get('/SocialandPolicyScience', function(req, res) {
	   res.render('presentation/socialandPolicyScience', { });
	});


app.get('/EnvironmentEnthusist', function(req, res) {
	   res.render('presentation/environmentEnthusist', { });
	});


app.get('/ClimateResearcher', function(req, res) {
	   res.render('presentation/climateResearcher', { });
	});

app.get('/OceanAdvocate', function(req, res) {
	   res.render('presentation/oceanAdvocate', { });
	});

app.get('/AquaticEchologyTechnician', function(req, res) {
	   res.render('presentation/aquaticEchologyTechnician', { });
	});

app.get('/UnderwaterCinematographer', function(req, res) {
	   res.render('presentation/underwaterCinematographer', { });
	});

app.get('/EnvironmentalEducator', function(req, res) {
	   res.render('presentation/environmentalEducator', { });
	});
