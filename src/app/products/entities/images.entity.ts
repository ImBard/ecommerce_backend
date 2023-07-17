/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductsEntity } from "./products.entity";

@Entity({ name: 'images' })
export class ImagesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => ProductsEntity, (productsEntity) => productsEntity.imagesEntity)
  productsEntity: ProductsEntity;

}