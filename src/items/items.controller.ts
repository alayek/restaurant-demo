import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let parsedId = 0;
    try {
      parsedId = Number(id);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e);
        throw new InternalServerErrorException(
          `Could not parse ID: ${e.message}`,
        );
      }
    }
    if (Number.isNaN(parsedId)) {
      throw new UnprocessableEntityException(`Could not parse ID: ${id}`);
    }
    const item = await this.itemsService.findOne(parsedId);
    if (item === undefined) {
      throw new NotFoundException(`Could not find item with ID: ${id}`);
    }
    return item;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
