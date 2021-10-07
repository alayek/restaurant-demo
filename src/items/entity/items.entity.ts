// item.entity.ts
import { BaseEntity } from '../../util/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'integer' })
  price: number;
}
