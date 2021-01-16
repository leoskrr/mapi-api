import { Router } from 'express';

import UsersControllers from '../controllers/UsersControllers';

const usersRoute = Router();
const usersControllers = new UsersControllers();

usersRoute.post('/', usersControllers.create);

export default usersRoute;
