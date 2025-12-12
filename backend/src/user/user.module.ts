import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProductModule } from '../product/product.module';
import { Cart } from '../cart/entities/cart.entity';

@Module({
  imports: [ProductModule, TypeOrmModule.forFeature([User, Cart])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
