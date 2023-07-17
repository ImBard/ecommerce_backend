import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/products.entity';
import { CommentsEntity } from './entities/comments.entity';
import { ReviewsEntity } from './entities/reviews.entity';
import { CartEntity } from './entities/carts.entity';
import { ProductsController } from './products.controller';
import { ImagesEntity } from './entities/images.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsEntity,
      CommentsEntity,
      ReviewsEntity,
      CartEntity,
      ImagesEntity,
    ]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
