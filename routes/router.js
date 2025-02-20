import { Router } from 'express';
import pageController from '../controllers/pageController.js';
import authController from '../controllers/authController.js';

const authRouter = Router();

//access pages
authRouter.get('/admin', authController.isLoggedIn, authController.hasRole("admin"), pageController.adminPage);
authRouter.get('/user', authController.isLoggedIn, pageController.userPage); 

//register
authRouter.get('/register', authController.registerPage);
authRouter.post('/register', authController.register);

//login
authRouter.get('/login', authController.loginPage);
authRouter.post('/login', authController.login);

//logout
authRouter.post('/logout', authController.logout);

export default authRouter;