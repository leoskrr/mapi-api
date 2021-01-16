import usersRouter from '@modules/users/infra/http/routes/users.routes';

import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);

export default router;
