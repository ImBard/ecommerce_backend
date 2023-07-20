import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { SaveProductDto } from './dto/save-product.dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Observable, of } from 'rxjs';
import { ProductsEntity } from './entities/products.entity';
import { SaveCartDto } from './dto/save-cart.dto';

export const storage = {
  storage: diskStorage({
    destination: 'public/product',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files[]', 10, storage))
  async save(@UploadedFiles() files, @Body() body: SaveProductDto) {
    return this.productsService.save(body, files);
  }

  @Post('/image')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFileTask(@UploadedFile() file): Observable<object> {
    return of({ filePath: file.filename });
  }

  @Get('/view')
  async findAll(): Promise<ProductsEntity[]> {
    return this.productsService.findAll();
  }

  @Get(':code')
  async findOneByCode(@Param('code') code: string) {
    const product = await this.productsService.findOneByCode(code);
    if (!product) {
      // Retornar uma resposta adequada caso o produto não seja encontrado
      throw new NotFoundException('Produto não encontrado');
    }
    return product;
  }

  @Post('/cart')
  async storeCart(@Body() body: SaveCartDto) {
    return this.productsService.saveCart(body);
  }
}
