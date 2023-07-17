import { Module } from '@nestjs/common';
import { UsersEntity } from './entities/users.entity';
import { AddressEntity } from './entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { ReviewsEntity } from '../products/entities/reviews.entity';
import { CommentsEntity } from '../products/entities/comments.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      AddressEntity,
      ReviewsEntity,
      CommentsEntity,
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
