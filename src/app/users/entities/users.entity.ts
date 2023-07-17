/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import { ReviewsEntity } from "../../products/entities/reviews.entity";
import { CommentsEntity } from "../../products/entities/comments.entity";
import { OrdersEntity } from "../../orders/entities/orders.entity";

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'birth_date', type: 'datetime' })
  birthDate: string;

  @Column()
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @Column({ name: 'url_img_perfil', default: null })
  urlImgPerfil: string;

  @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.usersEntity)
  @JoinColumn({ name: 'address_id'})
  addressEntity: AddressEntity[];

  @OneToMany(() => ReviewsEntity, (reviewsEntity) => reviewsEntity.usersEntity)
  reviewsEntity: ReviewsEntity[];

  @OneToMany(() => CommentsEntity, (commentsEntity) => commentsEntity.usersEntity)
  commentsEntity: CommentsEntity[];

  @OneToMany(() => OrdersEntity, (ordersEntity) => ordersEntity.usersEntity)
  ordersEntity: OrdersEntity[];

}