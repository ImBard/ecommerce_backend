import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from './entities/orders.entity';
import { OrdersItemsEntity } from './entities/orders-items.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity, OrdersItemsEntity])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
