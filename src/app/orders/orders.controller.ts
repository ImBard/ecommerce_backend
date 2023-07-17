import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { SaveOrdersDto } from './dto/save-orders.dto';
import { SaveOrderItemsDto } from './dto/save-order-items.dto';

@Controller('api/v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async save(
    @Body() body: { order: SaveOrdersDto; orderItems: SaveOrderItemsDto[] },
  ) {
    const { order, orderItems } = body;
    return this.ordersService.save(order, orderItems);
  }
}
