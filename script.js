

var express = require('express')
var bodyParser = require('body-parser')
var Smooch = require('smooch-core');

// // using app token
// var smoochCore = new SmoochCore({
//     appToken: '87q0bzydc2s0ui3t36zpe2qlm'
// });


// using generated JWT


// var jwt = require('jsonwebtoken');
// var token = jwt.sign({scope: 'app'}, '3KGW2qqyBJQzXBo3FfDEgPkA', {header: {kid: 'app_599625d1122e2f3300ea18ff'}});


// var smoochCore = new SmoochCore({
//     jwt: token
// });


var PORT = 8000;
// using JWT components
// Only available server-side. NEVER put your keyId and secret
// in you client-side code.
var smooch = new Smooch({
    keyId: '59984f7c3a7a752d0096274e',
    secret: 'vzzobhExSoInuzcj42yfTzd2',
    scope: 'app', // account, app, or appUser
    // userId: 'some-id' // only required for appUser scope
});


var app = express()

app.use(bodyParser.json());


   app.post('/message', function(req, res) {
        // const prettyJSON = JSON.stringify(req.body, null, 4);
        console.log(req.body['messages']);

        res.end();
    });

  app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });

// Expose /messages endpoint to capture webhooks https://docs.smooch.io/rest/#webhooks-payload
// app.post('/messages', function(req, res) {
//   var payload = req.body;
//   var message = payload.messages[0]
//   var text = message.text;
//   // console.log(payload)
//   // console.log(message)
//   // console.log(text)


//   res.status(200);
//   res.send('hello')


// })

// app.post('/messages', function(req, res) {
//   console.log('webhook PAYLOAD:\n', JSON.stringify(req.body, null, 4));

//   var appUserId = req.body.appUser._id;
//   // Call REST API to send message https://docs.smooch.io/rest/#post-message
//   if (req.body.trigger === 'message:appUser') {
//       smooch.appUsers.sendMessage(appUserId, {
//           type: 'text',
//           text: 'Live long and prosper',
//           role: 'appMaker'
//       })
//           .then((response) => {
//               console.log('API RESPONSE:\n', response);
//               res.end();
//           })
//           .catch((err) => {
//               console.log('API ERROR:\n', err);
//               res.end();
//           });
//   }
// });


// app.get('/', function(req, res) {
//   res.status(200);
//   res.send('hey!!!');
// })

//   const appUserId = req.body.appUser._id;
//   // Call REST API to send message https://docs.smooch.io/rest/#post-message
//   if (req.body.trigger === 'message:appUser') {
//       smooch.appUsers.sendMessage(appUserId, {
//           type: 'text',
//           text: 'Live long and prosper',
//           role: 'appMaker'
//       })
//           .then((response) => {
//               console.log('API RESPONSE:\n', response);
//               res.end();
//           })
//           .catch((err) => {
//               console.log('API ERROR:\n', err);
//               res.end();
//           });
//   }
// });


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})