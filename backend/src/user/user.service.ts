import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private readonly salt: number = 15;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return null;
    return user;
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const { password, ...userData } = dto;
    const hashed = await bcrypt.hash(password, this.salt);
    const user = this.userRepository.create({
      ...userData,
      password: hashed,
    });
    return this.userRepository.save(user);
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    const user = await this.getUserById(id);
    if (!user) return null;
    Object.assign(user, dto);
    return this.userRepository.save(user);
  }

  async deleteUser(id: string) {
    return await this.userRepository.delete(id);
  }
}
