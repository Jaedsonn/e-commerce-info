import cors from 'cors';
import { Router } from 'express';
import { UserCreateInputSchema, UserPartialSchema } from '../../prisma/generated/zod/index';
import {
  createUser,
  deleteUser,
  getUserByEmail,
  login
} from '../controller/userController';
import { validateUser } from '../middleware/validateUser';

const userRouter = Router();

userRouter.use(cors());
userRouter.delete('/', deleteUser);
userRouter.get('/', getUserByEmail);
userRouter.post('/login', validateUser(UserPartialSchema), login);
userRouter.post('/signup', validateUser(UserCreateInputSchema), createUser);

export default userRouter;
