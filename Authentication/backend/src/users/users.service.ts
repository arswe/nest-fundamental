import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    protected readonly usersRepository: Repository<User>,
  ) {}

  async save(body) {
    return this.usersRepository.save(body);
  }
}
