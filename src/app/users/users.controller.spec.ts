import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SaveAddressDto } from './dto/save-address.dto';
import { SaveUserDto } from './dto/save-user.dto';
import { UsersEntity } from './entities/users.entity';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
  });

  describe('save', () => {
    it('Should save a new product with success', async () => {
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

      const usersEntityMock = { ...userData } as UsersEntity;

      jest.spyOn(usersService, 'save').mockResolvedValueOnce(usersEntityMock);
      // Act
      const result = await usersService.save(userData, addressData);
      // Assert
      expect(result).toBeDefined();
      expect(usersService.save).toBeCalledTimes(1);
    });
  });
});
