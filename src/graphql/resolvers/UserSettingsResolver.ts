import { UserSettingsService } from '../../users/UserSettingsService';
import { UserSettings } from 'src/graphql/models/UserSettings';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingsService) {}

  @Mutation(() => UserSettings)
  async createUserSettings(
    @Args('createUserSettingsInput') userSettingsInput: CreateUserSettingsInput,
  ) {
    return await this.userSettingsService.createUserSettings(userSettingsInput);
  }
}
