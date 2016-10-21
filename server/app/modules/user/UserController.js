import jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens
import ms from 'ms';
import User from './UserModel';
import config from '../../config';

const createToken = user => jwt.sign(user, config.secret, { expiresIn: ms('30 days') });

// Get info by the req
const getUserInfo = req => ({
  id: req._id, // eslint-disable-line
  username: req.username,
  email: req.email
});

// LOGIN
export const loginUser = (req, res) => {
  const user = getUserInfo(req.user);

  res.status(200).json({
    token: `JWT ${createToken(user)}`,
    user
  });
};

// SIGNUP
export const signupUser = (req, res, next) => { // eslint-disable-line
  // Take value from the request
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Validation
  if (!username) {
    return res.status(402).send({ success: false, error: 'You must provided a username!' });
  }

  if (!email) {
    return res.status(402).send({ success: false, error: 'You must provided a email!' });
  }

  if (!password) {
    return res.status(402).send({ success: false, error: 'You must provided a password!' });
  }
  /*****************************************/ //eslint-disable-line

  // Find if user already exist
  User.findOne({ email: `${email}` }, (err, existUser) => { // eslint-disable-line
    if (err) {
      return next(err);
    }

    // If exist return error
    if (existUser) {
      return res.status(402).send({ success: false, error: 'This user already exist!' });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password
    });

    // Save to db
    newUser.save((err, user) => { // eslint-disable-line
      if (err) {
        return next(err);
      }

      const infoAboutUser = getUserInfo(user);

      return res.status(201).json({
        success: true,
        token: `JWT ${createToken(user)}`,
        user: infoAboutUser
      });
    });
  });
};
