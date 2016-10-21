import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UserSchema = Schema({ // eslint-disable-line new-cap
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// hook
UserSchema.pre('save', function(next) { // eslint-disable-line
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    return bcrypt.hash(user.password, salt, (err, hash) => { // eslint-disable-line
      // Store hash in your password DB.
      if (err) {
        return next(err);
      }

      user.password = hash;

      return next();
    });
  });
});

// Compares password
UserSchema.methods.comparePassword = function (passw, cb) { // eslint-disable-line
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) return cb(err);

    return cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
