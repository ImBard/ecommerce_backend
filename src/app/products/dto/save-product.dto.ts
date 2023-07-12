/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class SaveProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  code: string;
  
  @IsNotEmpty()
  price: string;
  
  @IsNotEmpty()
  sizes: Array<string>;
  
  @IsNotEmpty()
  colors: Array<string>;
  
  @IsNotEmpty()
  details: string;

}