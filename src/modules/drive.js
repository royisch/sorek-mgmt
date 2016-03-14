import googleDrive from 'google-drive'
import passport from 'passport'
var cookieName = 'sm-cookie';
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

    passport.use(new GoogleStrategy({
      callbackURL: 'http://localhost:3000/auth/google/return',
      clientID:GOOGLE_APP_ID,
      clientSecret:GOOGLE_APP_SECRET,
      passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {
        profile.accessToken = accessToken;
        profile.refreshToken = refreshToken;
        process.nextTick(function () {
          return done(null, profile);
        });
      })
    );

    app.get('/auth/google',passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.appfolder',
        'https://www.googleapis.com/auth/drive.file']
    }));

    app.get('/auth/google/return',
      passport.authenticate('google', { failureRedirect: '/' }),
      function(req, res) {
        // Successful authentication, redirect home.
        console.log(req.cookies[cookieName]);
        res.redirect('/listDocs');
      });

    app.get('getDocs', function(req, res) {
      console.log(req.cookies[cookieName]);
      res.send({'puta': 'madre'});
    });

  }
};
