import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { ProductsEntity } from './entities/products.entity';
import { CartEntity } from './entities/carts.entity';
import { SaveProductDto } from './dto/save-product.dto';
import { SaveImagesDto } from './dto/save-images.dto';
import { ImagesEntity } from './entities/images.entity';

interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(ImagesEntity)
    private readonly imagesRepository: Repository<ImagesEntity>,
  ) {}

  async save(
    data: SaveProductDto,
    filenames: UploadedFile[],
  ): Promise<ProductsEntity> {
    const savedProduct = this.productsRepository.create(
      await this.productsRepository.save(data),
    );

    const images = filenames.map((img) => {
      const image = new ImagesEntity();
      image.path = img.filename;
      image.productsEntity = savedProduct;
      return image;
    });

    const savedImages = await this.imagesRepository.save(images);

    return savedProduct;
  }

  async findAll(): Promise<ProductsEntity[]> {
    return this.productsRepository.find({
      relations: {
        imagesEntity: true,
      },
    });
  }

  async findOneByCode(code: string): Promise<ProductsEntity | undefined> {
    const options: FindOneOptions<ProductsEntity> = {
      where: { code },
      relations: ['imagesEntity', 'reviewEntity'],
    };
    return this.productsRepository.findOneOrFail(options);
  }
}
