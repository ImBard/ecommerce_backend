/* eslint-disable prettier/prettier */
import { ProductsEntity } from "../../products/entities/products.entity";

export class SaveOrderItemsDto {
  id: string;
  quantity: number;
  price: string;
  size: string;
  color: string;
  productsEntity: ProductsEntity;
}