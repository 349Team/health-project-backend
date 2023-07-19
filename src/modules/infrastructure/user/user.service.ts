import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, User } from '../user/entities/user.entity';
import { UpdateUserDto } from '../user/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    async function seed() {
      const existingAdminUser = await usersRepository.findOne({
        where: { role: Role.ADMIN },
      });

      if (!existingAdminUser) {
        const adminUser = new User();
        adminUser.name = 'Admin';
        adminUser.email = 'admin@admin.com';
        adminUser.password = 'adminpass';
        adminUser.role = Role.ADMIN;
        await usersRepository.save(adminUser);
      }
    }

    seed();
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneBy({ id });
  }

  async updateUser(updateUserDto: UpdateUserDto, id: string): Promise<User> {
    const user = await this.findOne(id);
    const { name, email, password } = updateUserDto;
    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;

    return await this.usersRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.usersRepository.softRemove(user);
    return user;
  }
}
