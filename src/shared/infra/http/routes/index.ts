import { Router } from 'express';

const router = Router();

router.get('/app', (request, response) => {
  return response.json({ response: 'Hello World' });
});

export default router;
