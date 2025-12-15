import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

interface IUserRegisterData {
  id: string;
  email: string;
}

interface IRegister {
  access_token: string;
  user: IUserRegisterData;
}

@Injectable()
export class AuthService {
  private readonly salt: number = 10;
  constructor(
    private readonly userService: UserService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(dto: CreateUserDto): Promise<IRegister> {
    const oldUser = await this.userService.getUserByEmail(dto.email);
    if (oldUser) {
      throw new BadRequestException('User already exists');
    }

    const { password, ...userData } = dto;
    const hashed = await bcrypt.hash(password, this.salt);
    const user = this.userRepository.create({
      ...userData,
      password: hashed,
    });

    const savedUser = await this.userRepository.save(user);
    const payload = { sub: savedUser.id, email: savedUser.email };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: savedUser.id,
        email: savedUser.email,
      },
    };
  }
}
