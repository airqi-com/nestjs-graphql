import { CreateUserSettingsInput } from './../graphql/utils/CreateUserSettingsInput';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettings } from 'src/graphql/models/UserSettings';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSettings)
    private userSettingsRepository: Repository<UserSettings>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUserSettingsById(userId: number) {
    return await this.userSettingsRepository.findOneBy({ userId });
  }

  async createUserSettings(createUserSettingsInput: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingsInput.userId,
    });

    if (!findUser) throw new Error('User Not Found');

    const newUserSetting = this.userSettingsRepository.create(
      createUserSettingsInput,
    );
    const savedSettings =
      await this.userSettingsRepository.save(newUserSetting);

    findUser.settings = savedSettings;
    await this.userRepository.save(findUser);

    return savedSettings;
  }
}
