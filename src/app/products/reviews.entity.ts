/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { CommentsEntity } from './comments.entity';

@Entity({ name: 'reviews' })
export class ReviewsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column({ type: 'int' })
  rating: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(() => ProductsEntity, (productsEntity) => productsEntity.reviewEntity)
  productsEntity: ProductsEntity;

  @OneToMany(() => CommentsEntity, (commentsEntity) => commentsEntity.reviewsEntity)
  commentsEntity: ReviewsEntity[];
}
