import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any): Promise<any> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() dto: CreateUserDto): Promise<any> {
    return this.authService.register(dto);
  }
}
