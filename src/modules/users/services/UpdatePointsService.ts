import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  user_id: string;
  new_points: number;
}

@injectable()
class UpdatePointsService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, new_points }: Request): Promise<number> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.points = new_points;

    this.usersRepository.save(user);

    return user.points;
  }
}

export default UpdatePointsService;
