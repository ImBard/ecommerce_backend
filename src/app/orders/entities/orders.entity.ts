/* eslint-disable prettier/prettier */
import { UsersEntity } from '../../users/entities/users.entity';
import { AddressEntity } from '../../users/entities/address.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrdersItemsEntity } from './orders-items.entity';

@Entity()
export class OrdersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'total_price' })
  totalPrice: string;

  @Column({ name: 'order_date', type: 'datetime' })
  orderDate: string;

  @Column({ name: 'total_amount' })
  totalAmount: string;

  @Column()
  status: string;

  @Column({ name: 'payment_method' })
  paymentMethod: string;

  @ManyToOne(() => AddressEntity, (addressEntity) => addressEntity.ordersEntity)
  @JoinColumn({ name: 'shipping_address' })
  shippingAddress: AddressEntity;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.ordersEntity)
  usersEntity: UsersEntity;

  @OneToMany(() => OrdersItemsEntity, (orderItemsEntity) => orderItemsEntity.ordersEntity)
  orderItemsEntity: OrdersEntity[];
}
