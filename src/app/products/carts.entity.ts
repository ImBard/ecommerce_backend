/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity({ name: 'cart' })
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: string;

  @ManyToOne(() => ProductsEntity, (productsEntity) => productsEntity.cartEntity)
  productsEntity: ProductsEntity;
}
