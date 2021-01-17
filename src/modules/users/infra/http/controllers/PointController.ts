import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdatePointsService from '@modules/users/services/UpdatePointsService';

class PointController {
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { new_points } = request.body;

    const updatePoints = container.resolve(UpdatePointsService);

    const points = await updatePoints.execute({
      user_id,
      new_points,
    });

    return response.json({
      user_id,
      points,
    });
  }
}

export default PointController;
