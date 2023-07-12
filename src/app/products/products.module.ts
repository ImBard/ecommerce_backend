import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { CommentsEntity } from './comments.entity';
import { ReviewsEntity } from './reviews.entity';
import { CartEntity } from './carts.entity';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsEntity,
      CommentsEntity,
      ReviewsEntity,
      CartEntity,
    ]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
