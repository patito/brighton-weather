var express = require('express');
var request = require('request');
var app = express();


var port = process.env.PORT || 8082;

var router = express.Router();

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Brighton,uk';

router.get('/', function (req, resp) {
    
    request(url, function (error, response, body) {
        if (!error && resp.statusCode === 200) {
            jsonWeather = JSON.parse(body);
            tempKelvin = jsonWeather["main"]["temp"];
            tempCelcius = tempKelvin - 273.15;
            resp.json({temperature: tempCelcius});
        }
    });
});

router.get('/user', function (req, resp) {
    resp.json({user: 'ze piroca'});
});

app.use('/', router);

app.listen(port);

console.log('Using port: ' + port);