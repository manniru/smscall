//var Twilio = require('twilio');
var config = require('./config.json');
const client = require('twilio')(config.sid, config.token);
// Using Environment Variables
// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var token = process.env.TWILIO_AUTH_TOKEN;
// var from = process.env.FROM_NUMBER;
// var to = process.env.TO_NUMBER;

var from = config.from
var to = config.to

const makecall = (phone) => {
  client.calls
    .create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      from: from,
      to: phone
    }).then(call => console.log(call.sid))
    .done();
}

makecall(to);



// Callback as first parameter
// twilio.calls.each(function(call) {
//   console.log(call.sid);
// });

const sendsms = (phone, message) => {
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
}
