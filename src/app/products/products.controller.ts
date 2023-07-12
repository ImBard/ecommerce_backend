import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { SaveProductDto } from './dto/save-product.dto';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async save(@Body() body: SaveProductDto) {
    return this.productsService.save(body);
  }
}
