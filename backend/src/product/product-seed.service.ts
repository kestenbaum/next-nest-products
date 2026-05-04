import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ProductService } from './product.service';

@Injectable()
export class ProductSeedService implements OnApplicationBootstrap {
  constructor(private readonly productService: ProductService) {}

  async onApplicationBootstrap() {
    const products = await this.productService.findAll();

    if (products.length === 0) {
      console.log('🌱 Seeding products...');
      const demoProducts = [
        {
          title: 'iPhone 15 Pro',
          description: 'Titanium design, A17 Pro chip',
          price: 999,
          image:
            'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800',
        },
        {
          title: 'MacBook Air M3',
          description: 'Strikingly thin and fast',
          price: 1299,
          image:
            'https://images.unsplash.com/photo-1517336714460-4c50d91771ec?q=80&w=800',
        },
        {
          title: 'iPad Pro',
          description: 'Ultimate iPad experience',
          price: 799,
          image:
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800',
        },
        {
          title: 'Apple Watch Ultra',
          description: 'Rugged and capable',
          price: 749,
          image:
            'https://images.unsplash.com/photo-1695610201712-902264906f35?q=80&w=800',
        },
        {
          title: 'AirPods Max',
          description: 'High-fidelity audio',
          price: 549,
          image:
            'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800',
        },
      ];

      for (const prod of demoProducts) {
        await this.productService.create(prod);
      }
      console.log('✅ Seeding complete!');
    }
  }
}
