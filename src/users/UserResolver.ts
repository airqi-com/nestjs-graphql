import { UserService } from './UserService';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserSettings } from '../graphql/models/UserSettings';
import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUserSettings } from 'src/__mocks__/mockUsers';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  async getUsers() {
    return await this.userService.getUsers();
  }

  @ResolveField(() => UserSettings, { name: 'settings', nullable: true })
  async getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId == user.id);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
