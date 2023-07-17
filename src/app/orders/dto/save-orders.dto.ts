/* eslint-disable prettier/prettier */
import { AddressEntity } from '../../users/entities/address.entity';
import { UsersEntity } from '../../users/entities/users.entity';
import { OrdersItemsEntity } from '../entities/orders-items.entity';

export class SaveOrdersDto {
  id: string;
  totalPrice: string;
  orderDate: string;
  totalAmount: string;
  status: string;
  paymentMethod: string;
  shippingAddress: AddressEntity;
  usersEntity: UsersEntity;
  orderItemsEntity: OrdersItemsEntity[];
}
