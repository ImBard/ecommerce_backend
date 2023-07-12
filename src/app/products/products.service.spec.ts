import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { ReviewsEntity } from './reviews.entity';
import { CartEntity } from './carts.entity';
import { CommentsEntity } from './comments.entity';
import { SaveProductDto } from './dto/save-product.dto';

describe('ProductsService', () => {
  let productsService: ProductsService;
  let productsRepository: Repository<ProductsEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductsEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(ReviewsEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(CartEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(CommentsEntity),
          useValue: {},
        },
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
    productsRepository = module.get<Repository<ProductsEntity>>(
      getRepositoryToken(ProductsEntity),
    );
  });

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });

  describe('save', () => {
    it('should save a new product with success', async () => {
      // Arrange
      const data: SaveProductDto = {
        name: 'Leather brigue saffiano',
        code: '5DGVD5821S',
        price: '155.00',
        sizes: ['S', 'L', 'XL', 'XXL'],
        colors: ['#123456', '#654321'],
        details: 'Bagulho doido',
      };
      const productEntityMock = { ...data } as ProductsEntity;
      jest
        .spyOn(productsRepository, 'create')
        .mockReturnValueOnce(productEntityMock);
      jest
        .spyOn(productsRepository, 'save')
        .mockResolvedValueOnce(productEntityMock);
      // Act
      const result = await productsService.save(data);
      // Assert
      expect(result).toBeDefined();
      expect(productsRepository.create).toBeCalledTimes(1);
      expect(productsRepository.save).toBeCalledTimes(1);
    });
  });
});
