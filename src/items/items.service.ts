import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { sleep } from '../util/sleep';

const items: CreateItemDto[] = [
  {
    id: 1,
    name: 'Mango',
    description: 'Fresh mango fruit',
    price: 10000,
  },
  {
    id: 2,
    name: 'Banana',
    description: 'Fresh banana fruit',
    price: 20000,
  },
  {
    id: 3,
    name: 'Avocado',
    description: 'Fresh avocado fruit',
    price: 30000,
  },
];

@Injectable()
export class ItemsService {
  // eslint-disable-next-line no-unused-vars
  create(_createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  async findAll(): Promise<CreateItemDto[]> {
    await sleep(100);
    return items.slice(0);
  }

  async findOne(id: number): Promise<CreateItemDto | NotFoundException> {
    await sleep(50);
    const item = items.find((item) => item.id === id);
    if (item) {
      return item;
    }
    return new NotFoundException(`item with id ${id} NOT FOUND`);
  }

  // eslint-disable-next-line no-unused-vars
  update(id: number, _updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
