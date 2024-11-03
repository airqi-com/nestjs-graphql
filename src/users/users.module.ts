import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettings } from 'src/graphql/models/UserSettings';
import { UserSettingsService } from './UserSettingsService';
import { UserSettingsResolver } from '../graphql/resolvers/UserSettingsResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSettings])],
  providers: [
    UserResolver,
    UserService,
    UserSettingsService,
    UserSettingsResolver,
  ],
})
export class UserModule {}
