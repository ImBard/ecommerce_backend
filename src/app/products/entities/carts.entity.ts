/* eslint-disable prettier/prettier */
import { ProductsEntity } from "./products.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cart' })
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;


  @Column()
  size: string;

  @Column({ type: 'json' })
  color: object[];

  @ManyToOne(() => ProductsEntity, (productsEntity) => productsEntity.cartEntity)
  productsEntity: ProductsEntity;

}
