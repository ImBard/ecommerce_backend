/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { ProductsEntity } from "../entities/products.entity";

export class SaveCartDto {
  quantity: number;
  size: string;
  color: object[];
  
  productsEntityId : ProductsEntity;

}