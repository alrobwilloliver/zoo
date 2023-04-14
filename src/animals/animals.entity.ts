import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AnimalType } from '../types/animal.d';
import { IEnclosure } from '../types/enclosure.d';

import { Enclosure } from '../enclosures/enclosures.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Enclosure, (enclosure: IEnclosure) => enclosure.id)
  enclosure: Enclosure;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  type: AnimalType;
}
