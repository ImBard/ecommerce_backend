/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CartEntity } from './carts.entity';
import { ReviewsEntity } from './reviews.entity';

@Entity({ name: 'products' })
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ type: 'decimal' })
  price: string;

  @Column({ type: 'json' })
  sizes: Array<string>;

  @Column({ type: 'json' })
  colors: Array<string>;

  @Column()
  details: string;

  @Column({ nullable: true })
  composition: string;

  @Column({ name: 'size_and_fit', nullable: true })
  sizeAndFit: string;

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.productsEntity)
  cartEntity: CartEntity[];
  
  @OneToMany(() => ReviewsEntity, (reviewsEntity) => reviewsEntity.productsEntity)
  reviewEntity: ReviewsEntity[];
  
}
