// TODO: Facebook, Google, Github login
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Stategy as JWTStrategy, ExtractJwt as extractJwt } from 'passport-jwt';
import config from '../../config';
import User from './UserModel';

const localOptions = {
  usernameField: 'email',
};

const localLogin = new LocalStrategy(localOptions,
  (email, password, done) => {
    User.findOne({ email }, (err, user) => { // eslint-disable-line
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect Username!' });
      }

      user.comparePassword(password, (err, isMatch) => { // eslint-disable-line
        if (err) {
          return done(err);
        }

        if (!isMatch) {
          return done(null, false, {
            message: 'Incorrect Password!'
          });
        }

        passport.serializeUser((user, done) => { // eslint-disable-line
          done(null, user);
        });

        passport.deserializeUser((user, done) => { // eslint-disable-line
          User.findById(user.id, (err, user) => { // eslint-disable-line
            done(err, user);
          });
        });

        return done(null, user);
      });
    });
  }
);

const jwtOpts = {
  jwtFromRequest: extractJwt.fromAuthHeader('authorization'),
  secretOrKey: config.secret
};

// const tokenLogin = new JWTStrategy(jwtOpts, (payload, done) => {
//   User.findById(payload.id, (err, user) => {
//     if (err) {
//       return done(err, false);
//     }
//
//     if (user) {
//       done(null, user);
//     }
//
//     return done(null, false);
//   });
// });

// passport.use(tokenLogin);
passport.use(localLogin);
