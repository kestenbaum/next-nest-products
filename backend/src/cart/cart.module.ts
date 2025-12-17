import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem])],
  controllers: [CartController],
  providers: [CartService],
  exports: [TypeOrmModule.forFeature([Cart, CartItem])],
})
export class CartModule {}
