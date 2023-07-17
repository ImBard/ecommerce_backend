/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { ProductsEntity } from "../entities/products.entity";

export class SaveImagesDto {
  @IsNotEmpty()
  path: string;

  productsEntity: ProductsEntity;
}