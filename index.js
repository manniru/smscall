var Twilio = require('twilio');
var config = require('./config.json');

// Using Environment Variables
// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var token = process.env.TWILIO_AUTH_TOKEN;
// var from = process.env.FROM_NUMBER;
// var to = process.env.TO_NUMBER;

var accountSid = config.sid
var token = config.token
var from = config.from
var to = config.to

var twilio = new Twilio(accountSid, token);

// Callback as first parameter
// twilio.calls.each(function(call) {
//   console.log(call.sid);
// });

// Send message using promise
var promise = twilio.messages.create({
  from: from,
  to: to,
  body: 'create using promises by Muhammad Mannir Ahmad github.com/manniru/mannirphone'
});
promise.then(function(message) {
  console.log('Created message using promises');
  console.log(message.sid);
});
