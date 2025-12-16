import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: string) {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.productRepository.findOne({
      where: { id },
    });
    if (!existingProduct) {
      return null;
    }
    Object.assign(existingProduct, updateProductDto);
    return this.productRepository.save(existingProduct);
  }

  async remove(id: string) {
    return this.productRepository.delete(id);
  }
}
