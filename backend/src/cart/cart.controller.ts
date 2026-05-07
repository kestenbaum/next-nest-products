import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
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

  @Get('count')
  async getCartItemCount(@Req() req: RequestWithUser) {
    return await this.cartService.getCartItemCount(req.user.id);
  }

  @Post('add')
  async addToCart(
    @Req() req: RequestWithUser,
    @Body() body: { productId: string; quantity: number },
  ) {
    return await this.cartService.addToCart(
      req.user.id,
      body.productId,
      body.quantity,
    );
  }

  @Patch('update/:itemId')
  async updateCartItem(
    @Req() req: RequestWithUser,
    @Param('itemId') itemId: string,
    @Body() body: { quantity: number },
  ) {
    return await this.cartService.updateCartItem(
      req.user.id,
      itemId,
      body.quantity,
    );
  }

  @Delete('item/:itemId')
  async removeCartItem(
    @Req() req: RequestWithUser,
    @Param('itemId') itemId: string,
  ) {
    return await this.cartService.removeCartItem(req.user.id, itemId);
  }

  @Delete('clear')
  async clearCart(@Req() req: RequestWithUser) {
    return await this.cartService.clearCart(req.user.id);
  }
}
