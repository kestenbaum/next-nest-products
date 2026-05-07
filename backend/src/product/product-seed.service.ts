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
          title: 'iPhone 15 Pro Max 256GB',
          description:
            'The most advanced iPhone with titanium design, A17 Pro chip, and professional camera system. Features a 6.7-inch Super Retina XDR display, up to 29 hours of video playback, and Action Button for quick access to your favorite features.',
          price: 1199,
          image:
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'MacBook Pro 16" M3 Max',
          description:
            'Supercharged by M3 Max chip with 16-core CPU and 40-core GPU. 32GB unified memory and 1TB SSD. Liquid Retina XDR display with ProMotion technology. Up to 22 hours of battery life. Perfect for professional video editing, 3D rendering, and software development.',
          price: 3499,
          image:
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Sony WH-1000XM5 Wireless Headphones',
          description:
            'Industry-leading noise canceling with 8 microphones and advanced AI. 30-hour battery life with quick charge (3 min = 3 hours). Crystal clear hands-free calling. Premium comfort with soft leather cushions. Multipoint connection for seamless device switching.',
          price: 349,
          image:
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Nintendo Switch OLED Model',
          description:
            'Vibrant 7-inch OLED screen for enhanced colors and contrast. Enhanced audio with built-in speakers. 64GB internal storage. Includes dock, Joy-Con controllers, and HDMI cable. Play at home on TV or on-the-go with up to 9 hours of battery life.',
          price: 349,
          image:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: "Levi's 501 Original Jeans",
          description:
            'The original blue jean since 1873. Premium selvedge denim with button fly. Straight fit that sits at waist. Authentic vintage-inspired wash. Made with 100% cotton. Iconic red tab label. A timeless classic that never goes out of style.',
          price: 89,
          image:
            'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Dyson V15 Detect Cordless Vacuum',
          description:
            'Powerful cordless vacuum with laser dust detection. Intelligently adapts suction power. Up to 60 minutes of run time. Converts to handheld for cleaning stairs and furniture. Includes soft roller cleaner head, combination tool, and crevice tool.',
          price: 699,
          image:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Canon EOS R6 Mark II',
          description:
            'Full-frame mirrorless camera with 24.2MP sensor. 4K 60p video recording. In-body image stabilization. Dual card slots (CFexpress + SD). 6.5 stops of stabilization. Subject detection AF with people, animal, and vehicle recognition. Perfect for photography and videography.',
          price: 2499,
          image:
            'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Nike Air Max 270',
          description:
            'Revolutionary Air Max sole with visible Air unit. Mesh upper for breathability. Flywire cables for support. Rubber outsole for traction. Iconic style meets modern comfort. Available in multiple colorways. Perfect for everyday wear and athletic activities.',
          price: 150,
          image:
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'KitchenAid Stand Mixer 5 Quart',
          description:
            '5-quart stainless steel bowl with 10 speeds. 325 watts of power. Includes flat beater, wire whip, and dough hook. Planetary mixing action ensures thorough mixing. Tilt-head design for easy access. Multiple colors available. Essential tool for bakers and home cooks.',
          price: 379,
          image:
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Samsung 55" QLED 4K Smart TV',
          description:
            '55-inch Quantum Dot display with 4K resolution. Quantum HDR for vibrant colors. Smart TV with Tizen OS. Built-in streaming apps. Voice control with Alexa and Google Assistant. Multiple HDMI and USB ports. Slim design that fits any room decor.',
          price: 899,
          image:
            'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Apple AirPods Pro (2nd generation)',
          description:
            'Active Noise Cancellation and Adaptive Transparency. Personalized Spatial Audio with dynamic head tracking. Touch control with force sensor. Up to 6 hours of listening time (30 hours with case). Sweat and water resistant. MagSafe charging case included.',
          price: 249,
          image:
            'https://images.unsplash.com/photo-1606220945770-b5b6c2c9f188?q=80&w=800&auto=format&fit=crop',
        },
        {
          title: 'Peloton Bike+',
          description:
            'Interactive fitness bike with 24-inch HD touchscreen. Live and on-demand classes. Heart rate monitoring. Auto-follow resistance. Premium speakers and ambient lighting. Integrated tablet holder. Connects to Peloton app for personalized workouts.',
          price: 2495,
          image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
        },
      ];

      for (const product of demoProducts) {
        await this.productService.create(product);
      }
      console.log(
        '✅ Seeding complete! Added',
        demoProducts.length,
        'products.',
      );
    }
  }
}
