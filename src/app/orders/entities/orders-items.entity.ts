/* eslint-disable prettier/prettier */
import { ProductsEntity } from "../../products/entities/products.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrdersEntity } from "./orders.entity";

@Entity()
export class OrdersItemsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @Column()
  price: string;

  @Column()
  size: string;

  @Column()
  color: string;
  
  @ManyToOne(() => ProductsEntity, (productsEntity) => productsEntity.ordersItemsEntity)
  productsEntity: ProductsEntity;

  @ManyToOne(() => OrdersEntity, (ordersEntity) => ordersEntity.orderItemsEntity)
  ordersEntity: OrdersEntity;
}
