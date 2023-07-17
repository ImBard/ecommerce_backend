import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SaveProductDto } from './dto/save-product.dto';
import { ProductsEntity } from './entities/products.entity';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
    expect(productsService).toBeDefined();
  });

  describe('save', () => {
    it('Should save a new product with success', async () => {
      // Arrange
      const body: SaveProductDto = {
        name: 'Leather brigue saffiano',
        code: '5DGVD5821S',
        price: '155.00',
        sizes: ['S', 'L', 'XL', 'XXL'],
        colors: ['#123456', '#654321'],
        details: 'Bagulho doido',
      };

      const productsEntityMock = { ...body } as ProductsEntity;

      jest
        .spyOn(productsService, 'save')
        .mockResolvedValueOnce(productsEntityMock);
      // Act
      const result = await productsController.save(body);
      // Assert
      expect(result).toBeDefined();
      expect(productsService.save).toBeCalledTimes(1);
    });
  });
});
