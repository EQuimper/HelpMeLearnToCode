// TODO: Facebook, Google, Github login
import passport from 'passport';
import { LocalStrategy } from 'passport-local';
import { Stategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import config from '../../config';
import User from './UserModel';

const localLogin = new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => { // eslint-disable-line
      if (err) return done(err);

      if (!user) {
        return done(null, false, { message: 'Incorrect Email!' });
      }

      user.comparePassword(password, isMatch => {
        if (err) {
          return done(err);
        }

        if (!isMatch) {
          return done(null, false, {
            message: 'Incorrect Password!'
          });
        }

        return done(null, user);
      });
    });
  }
);

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.secret
};

const tokenLogin = new JWTStrategy(jwtOpts, (payload, done) => {
  User.findById(payload.id, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    }

    return done(null, false);
  });
});

passport.use(tokenLogin);
passport.use(localLogin);
