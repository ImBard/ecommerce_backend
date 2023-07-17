import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';
import { AddressEntity } from './entities/address.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SaveUserDto } from './dto/save-user.dto';
import { SaveAddressDto } from './dto/save-address.dto';
import { ReviewsEntity } from '../products/entities/reviews.entity';
import { CommentsEntity } from '../products/entities/comments.entity';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: Repository<UsersEntity>;
  let addresRepository: Repository<AddressEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(ReviewsEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(CommentsEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersRepository = module.get<Repository<UsersEntity>>(
      getRepositoryToken(UsersEntity),
    );
    addresRepository = module.get<Repository<AddressEntity>>(
      getRepositoryToken(AddressEntity),
    );
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('save', () => {
    it('should save a new user with success', async () => {
      // Arrange
      const addressData: SaveAddressDto = {
        id: 'a1234',
        street: 'Maria Alves Bonfim',
        number: '153',
        complement: '',
        city: 'São José dos Campos',
        state: 'São Paulo',
        country: 'Brasil',
        postalCode: '12226-560',
      };
      const userData: SaveUserDto = {
        name: 'Talison Brendon',
        birthDate: `${new Date()}`,
        email: 'nicota1234@gmail.com',
        phoneNumber: '(12) 99708-9629',
        isAdmin: true,
        urlImgPerfil: '',
        addressEntity: [addressData],
        id: '',
        reviewsEntity: [],
        commentsEntity: [],
      };

      const userEntityMock = { ...userData } as UsersEntity;
      jest.spyOn(usersRepository, 'create').mockReturnValueOnce(userEntityMock);
      jest.spyOn(usersRepository, 'save').mockResolvedValueOnce(userEntityMock);
      // Act
      const result = await usersService.save(userData, addressData);
      // Assert
      expect(result).toBeDefined();
      expect(usersRepository.create).toBeCalledTimes(1);
      expect(usersRepository.save).toBeCalledTimes(1);
    });
  });
});
