import { Router } from 'express';
import passport from 'passport';
import * as auth from './UserController';
// import './passport';

const UserRoutes = new Router();

const reqSignin = passport.authenticate('local', { session: false });

UserRoutes.post('/signup', auth.signupUser);
UserRoutes.post('/login', reqSignin, auth.loginUser);

export default UserRoutes;
