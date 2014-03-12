var express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  passport = require('passport'),
  GoogleStrategy = require('passport-google').Strategy,
  port = process.env.PORT || 3000;

app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);

passport.use(new GoogleStrategy({
    returnURL: 'http://ec2-54-186-119-32.us-west-2.compute.amazonaws.com/auth/google/return',
    realm: 'http://ec2-54-186-119-32.us-west-2.compute.amazonaws.com/'
  },
  function(identifier, profile, done) {
    console.log(identifier);
    console.log(profile);
    console.log(done);
    done(false, 'Kermit');
  }
));

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
  passport.authenticate('google', { successRedirect: '/login',
                                    failureRedirect: '/' }));

app.get('/login', function (req, res) {
  res.send('Hazzah!');
});

app.listen(port);
console.log('Listening on port ' +  port);