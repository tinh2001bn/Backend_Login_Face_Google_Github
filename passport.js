var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport')
 const GOOGLE_CLIENT_ID ="412375703902-1tqsc0dc9gq185nk0c1c4sdo0bm38kec.apps.googleusercontent.com";
 const GOOGLE_CLIENT_SECRET ="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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));

passport.use(new FacebookStrategy({
    clientID: '608808307372410',
    clientSecret: 'c0f46173642f9de263604daf8be85c6b',
    callbackURL: "https://9e84-2001-ee0-42ac-a440-9de1-4052-f336-13c0.ap.ngrok.io/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(null, profile);
    // });
  }
));
//git hub
passport.use(new GitHubStrategy({
  clientID:'d7c188fd26b6e4ea22af' ,
  clientSecret: '09a380241d031ea8baf1074407c61ed094ebbc90',
  callbackURL: "http://localhost:4000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(null, profile);
  // });
}
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });