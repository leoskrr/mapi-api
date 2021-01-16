import { Router } from 'express';

import UsersControllers from '../controllers/UsersControllers';

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.post('/', usersControllers.create);

export default usersRouter;
