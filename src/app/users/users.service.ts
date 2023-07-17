import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';
import { AddressEntity } from './entities/address.entity';
import { ReviewsEntity } from '../products/entities/reviews.entity';
import { CommentsEntity } from '../products/entities/comments.entity';
import { SaveUserDto } from './dto/save-user.dto';
import { SaveAddressDto } from './dto/save-address.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    @InjectRepository(AddressEntity)
    private readonly addresRepository: Repository<AddressEntity>,
    @InjectRepository(ReviewsEntity)
    private readonly reviewsRepository: Repository<ReviewsEntity>,
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
  ) {}

  async save(
    userData: SaveUserDto,
    addressData: SaveAddressDto,
  ): Promise<UsersEntity> {
    const address = this.addresRepository.create(
      await this.addresRepository.save(addressData),
    );
    const user = this.usersRepository.create(userData);
    user.addressEntity = [address];
    const savedUser = await this.usersRepository.save(user);
    return savedUser;
  }
}
