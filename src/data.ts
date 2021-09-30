import { CreateItemDto } from '../src/items/dto/create-item.dto';

export const items: CreateItemDto[] = [
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
