import { Router } from 'express';
import passport from 'passport';
import * as auth from './UserController';
// import './passport';

const UserRoutes = new Router();

const reqSignin = passport.authenticate('local', { session: false });

UserRoutes.route('/user/signup').post(auth.signupUser);
UserRoutes.route('/user/login').post(reqSignin, auth.loginUser);

export default UserRoutes;
