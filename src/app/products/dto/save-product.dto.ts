/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ImagesEntity } from '../entities/images.entity';

export class SaveProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  code: string;
  
  @IsNotEmpty()
  price: string;
  
  @IsNotEmpty()
  sizes: string[];
  
  @IsNotEmpty()
  colors: object[];
  
  @IsNotEmpty()
  details: string;

  imagesEntity: ImagesEntity[];
}