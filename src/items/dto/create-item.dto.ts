import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
