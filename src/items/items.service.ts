import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { sleep } from '../util/sleep';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entity/items.entity';

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
  constructor(
    @InjectRepository(Item) private readonly itemRepo: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    await sleep(20);
    return this.itemRepo.save({
      name: createItemDto.name,
      description: createItemDto.description,
      price: createItemDto.price,
    });
  }

  async findAll(): Promise<CreateItemDto[]> {
    await sleep(100);
    return this.itemRepo.find();
  }

  async findOne(id: number): Promise<CreateItemDto | undefined> {
    await sleep(50);
    return items.find((item) => item.id === id);
  }

  // eslint-disable-next-line no-unused-vars
  update(id: number, _updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
