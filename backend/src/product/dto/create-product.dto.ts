import { Length } from 'class-validator';

export class CreateProductDto {
  @Length(1, 36, { message: 'ID must be between 1 and 36 characters' })
  id: number;

  @Length(1, 20, { message: 'title must be between 1 and 36 characters' })
  title: string;

  @Length(1, 1250, {
    message: 'description must be between 1 and 36 characters',
  })
  description: string;

  @Length(1, 10, { message: 'price must be between 1 and 10 characters' })
  price: number;
}
