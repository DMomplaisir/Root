// var request = require('request');
// var consumer_key = 'Zhi4LTUmPhw1ym0tJZ6HD4l28';
// var consumer_secret = 'Dx4Nsjf1vt3lbjcBVwQwhndgsgAks7Uyt8YxNATJTURT7u3PrH';
// var encode_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');
// 
// var options = {
//     url: 'https://api.twitter.com/oauth2/token',
//     headers: {
//         'Authorization': 'Basic ' + encode_secret,
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
//     body: 'grant_type=client_credentials'
// };
//
// request.post(options, function(error, response, body) {
//     console.log(body); // <<<< This is your BEARER TOKEN !!!
// });
