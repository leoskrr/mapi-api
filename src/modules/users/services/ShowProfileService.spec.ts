import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const profile = await showProfile.execute(user.id);

    await expect(profile.name).toBe('John Doe');
    await expect(profile.email).toBe('johndoe@example.com');
  });

  it('should not be able to show the profile from nonexisting user', async () => {
    await expect(
      showProfile.execute('nonexistinguserid'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
