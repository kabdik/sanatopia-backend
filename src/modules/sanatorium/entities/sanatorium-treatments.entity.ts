import { BaseEntity } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { SanatoriumTreatments } from '../interfaces/sanatorium-treatments.interface';
import { SanatoriumEntity } from './sanatorium.entity';

@Entity(TableName.SANATORIUM_TREATMENTS)
export class SanatoriumTreatmentsEntity extends BaseEntity implements SanatoriumTreatments {
  @Column('int')
  sanatoriumId!: number;

  @Column('varchar')
  treatment!: string;

  @Column('numeric', { precision: 10, scale: 2, nullable: true })
  price!: number | null;

  @ManyToOne(() => SanatoriumEntity, (sanatorium)=> sanatorium.treatments,{ onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'sanatoriumId' })
  sanatorium?: SanatoriumEntity;
}
