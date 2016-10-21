// TODO: Setup cors
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
// import cors from 'cors';
import mongoose from 'mongoose';

import config from './config';
import UserRoutes from './modules/user/UserRoutes';

// =======================
// configuration =========
// =======================

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl, err => {
  if (err) {
    console.log('Did you forget to start mongo?'); // eslint-disable-line no-console
  }
  console.log(`Mongo setup running on db ${config.dbUrl}`); // eslint-disable-line no-console
});

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'werwerwerw',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// =======================
// routes ================
// =======================
app.use('/api/v1/user', UserRoutes);

// =======================
// start the server ======
// =======================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`SERVER running on port ${PORT}`)); // eslint-disable-line no-console
