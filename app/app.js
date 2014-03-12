var express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  passport = require('passport'),
  GoogleStrategy = require('passport-google').Strategy,
  port = process.env.PORT || 3000;

passport.use(new GoogleStrategy({
    returnURL: 'http://ec2-54-186-119-32.us-west-2.compute.amazonaws.com/auth/google/return',
    realm: 'http://ec2-54-186-119-32.us-west-2.compute.amazonaws.com/'
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));

app.use(express.logger());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return',
  passport.authenticate('google', function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user);
    res.redirect('/users/' + req.user.username);
}));


app.listen(port);
console.log('Listening on port ' +  port);