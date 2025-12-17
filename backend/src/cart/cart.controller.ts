import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartService } from './cart.service';
import { User } from '../user/entities/user.entity';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('cart')
@UseGuards(AuthGuard('jwt'))
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async getCart(@Req() req: RequestWithUser) {
    return await this.cartService.getCart(req.user.id);
  }

  @Post('add')
  async addToCart(
    @Req() req: RequestWithUser,
    @Body() body: { productId: string; quantity: number },
  ) {
    return await this.cartService.addToCart(
      req.user.id,
      body.quantity,
      body.productId,
    );
  }
}
