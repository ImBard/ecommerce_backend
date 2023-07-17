/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./users.entity";
import { OrdersEntity } from "../../orders/entities/orders.entity";

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.addressEntity)
  @JoinColumn({ name: 'user_id' })
  usersEntity: UsersEntity[];

  @OneToMany(() => OrdersEntity, (ordersEntity) => ordersEntity.shippingAddress)
  ordersEntity: OrdersEntity;
  

}