import { Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @Column({ type: 'boolean', default: true, select: false })
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: false,
  })
  updatedAt: Date;
}
