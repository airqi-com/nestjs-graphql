import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    return await this.usersRepository.find({ relations: ['settings'] });
  }

  async createUser(createUser: CreateUserInput) {
    const newUser = this.usersRepository.create(createUser);
    return this.usersRepository.save(newUser);
  }

  async getUserById(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
  }
}
