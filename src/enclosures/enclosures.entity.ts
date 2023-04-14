import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IAnimal } from '../types/animal.d';

import { Animal } from '../animals/animals.entity';

@Entity()
export class Enclosure {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Animal, (animal: Animal) => animal.enclosure, {})
  animals: IAnimal[];

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  at_capacity: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
