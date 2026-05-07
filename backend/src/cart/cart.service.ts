import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepo: Repository<Cart>,
    @InjectRepository(CartItem) private cartItemRepo: Repository<CartItem>,
  ) {}

  async getCart(userId: string): Promise<Cart> {
    let cart = await this.cartRepo.findOne({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
    });

    if (!cart) {
      cart = this.cartRepo.create({
        user: { id: userId },
        items: [],
        total: 0,
      });
      await this.cartRepo.save(cart);
    }

    return cart;
  }

  async getCartItemCount(userId: string): Promise<{ count: number }> {
    const cart = await this.getCart(userId);
    const count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    return { count };
  }

  async addToCart(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<Cart> {
    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }

    if (quantity > 99) {
      throw new BadRequestException('Maximum quantity per item is 99');
    }

    const cart = await this.getCart(userId);
    const existingItem = cart.items.find(
      (item) => item.product.id === productId,
    );

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > 99) {
        throw new BadRequestException('Maximum quantity per item is 99');
      }
      existingItem.quantity = newQuantity;
      await this.cartItemRepo.save(existingItem);
    } else {
      const newItem = this.cartItemRepo.create({
        cart: { id: cart.id },
        product: { id: productId },
        quantity,
      });
      await this.cartItemRepo.save(newItem);
    }

    return await this.updateCartTotal(userId);
  }

  async updateCartItem(
    userId: string,
    itemId: string,
    quantity: number,
  ): Promise<Cart> {
    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }

    if (quantity > 99) {
      throw new BadRequestException('Maximum quantity per item is 99');
    }

    const cart = await this.getCart(userId);
    const item = cart.items.find((item) => item.id === itemId);

    if (!item) {
      throw new NotFoundException('Cart item not found');
    }

    item.quantity = quantity;
    await this.cartItemRepo.save(item);

    return await this.updateCartTotal(userId);
  }

  async removeCartItem(userId: string, itemId: string): Promise<Cart> {
    const cart = await this.getCart(userId);
    const item = cart.items.find((item) => item.id === itemId);

    if (!item) {
      throw new NotFoundException('Cart item not found');
    }

    await this.cartItemRepo.remove(item);

    return await this.updateCartTotal(userId);
  }

  async clearCart(userId: string): Promise<{ message: string }> {
    const cart = await this.getCart(userId);

    if (cart.items.length > 0) {
      await this.cartItemRepo.delete({ cart: { id: cart.id } });
    }

    cart.total = 0;
    await this.cartRepo.save(cart);

    return { message: 'Cart cleared successfully' };
  }

  private async updateCartTotal(userId: string): Promise<Cart> {
    const cart = await this.cartRepo.findOne({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    cart.total = cart.items.reduce((sum, item) => {
      return sum + Number(item.product.price) * item.quantity;
    }, 0);

    return await this.cartRepo.save(cart);
  }
}
