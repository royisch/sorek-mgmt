import googleDrive from 'google-drive'
import passport from 'passport'

module.exports = {
  initGoogleAuth: function (app) {

    console.log("google module");

    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
      GOOGLE_APP_ID = '975752173116-1apvhe965jv86iu2on8q8qis2duqlmnc.apps.googleusercontent.com',
      GOOGLE_APP_SECRET = "569e9H3Y2moz8ZlewdDnpDb3"; //? todo validate that this is the app secret

    var serializer = function(user, done) {
      done(null, user);
    };
    passport.serializeUser(serializer);
    passport.deserializeUser(serializer);


// Use the GOOGLEStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GOOGLE
//   profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
      callbackURL: 'http://localhost:3000/auth/google/return',
      clientID:GOOGLE_APP_ID,
      clientSecret:GOOGLE_APP_SECRET,
      passReqToCallback   : true
      },
      function(accessToken, refreshToken, profile, done) {
        if(!profile){
          done(null, null);
        }
        //done(null,{token: accessToken, profile: currentUser});
        done(null,currentUser);
      })

    );



// GET /auth/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /auth/facebook/callback
    app.get('/auth/google',passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file'] })
    );

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
    app.get('/auth/google/return',
      passport.authenticate('google', { failureRedirect: '/' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/listDocs');
      });
  }
};
