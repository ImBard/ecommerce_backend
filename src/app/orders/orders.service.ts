/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrdersEntity } from './entities/orders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersItemsEntity } from './entities/orders-items.entity';
import { SaveOrdersDto } from './dto/save-orders.dto';
import { SaveOrderItemsDto } from './dto/save-order-items.dto';
import { getRepository } from 'typeorm';
import { AddressEntity } from '../users/entities/address.entity';
import { UsersEntity } from '../users/entities/users.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly ordersRepository: Repository<OrdersEntity>,
    @InjectRepository(OrdersItemsEntity)
    private readonly ordersItemsRepository: Repository<OrdersItemsEntity>,
  ) { }


  async save(orderData: SaveOrdersDto, orderItemsData: SaveOrderItemsDto[]): Promise<OrdersEntity> {
    const savedOrder = this.ordersRepository.create(await this.ordersRepository.save(orderData));

    const orderItems = orderItemsData.map((itemData) => {
      const orderItem = new OrdersItemsEntity();
      orderItem.color = itemData.color;
      orderItem.price = itemData.price;
      orderItem.size = itemData.size;
      orderItem.quantity = itemData.quantity;
      orderItem.productsEntity = itemData.productsEntity;
      orderItem.ordersEntity = savedOrder;
      return orderItem;
    });

    const savedOrderItems = await this.ordersItemsRepository.save(orderItems);

    return savedOrder;
  }
}
