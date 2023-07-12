import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { ReviewsEntity } from './reviews.entity';
import { CommentsEntity } from './comments.entity';
import { CartEntity } from './carts.entity';
import { SaveProductDto } from './dto/save-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
    @InjectRepository(ReviewsEntity)
    private readonly reviewsRepository: Repository<ReviewsEntity>,
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
  ) {}

  async save(data: SaveProductDto): Promise<ProductsEntity> {
    return this.productsRepository.save(this.productsRepository.create(data));
  }
}
