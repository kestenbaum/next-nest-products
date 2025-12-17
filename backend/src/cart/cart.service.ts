import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart-item.entity';

export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepo: Repository<Cart>,
    @InjectRepository(CartItem) private cartItemRepo: Repository<CartItem>,
  ) {}

  async getCart(userId: string) {
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

  async addToCart(userId: string, quantity: number, productId: string) {
    const cart = await this.getCart(userId);
    const item = cart.items.find((item) => item.product.id === productId);

    if (item) {
      item.quantity += quantity;
      await this.cartRepo.save(item);
    } else {
      const newItem = this.cartItemRepo.create({
        cart: cart,
        product: { id: productId },
        quantity: quantity,
      });
      await this.cartItemRepo.save(newItem);
    }

    const updatedCart = await this.getCart(userId);
    updatedCart.total = updatedCart.items.reduce((acc, i) => {
      return acc + Number(i.product.price) * i.quantity;
    }, 0);

    return await this.cartRepo.save(updatedCart);
  }
}
