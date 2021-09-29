import { Module } from '@nestjs/common';
import { ItemsService } from './items.service.js';
import { ItemsController } from './items.controller.js';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
