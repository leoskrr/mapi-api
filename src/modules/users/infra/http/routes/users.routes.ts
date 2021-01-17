import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersControllers from '../controllers/UsersControllers';
import PointController from '../controllers/PointController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersControllers = new UsersControllers();
const pointController = new PointController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersControllers.create,
);

usersRouter.patch('/points', ensureAuthenticated, pointController.update);

export default usersRouter;
