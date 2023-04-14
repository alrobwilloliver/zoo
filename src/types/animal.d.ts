import { IEnclosure } from './enclosure';

export type AnimalType =
  | 'mammal'
  | 'reptile'
  | 'fish'
  | 'bird'
  | 'amphibian'
  | 'invertebrate';

export interface IAnimal {
  species: string;
  name: string;
  type: AnimalType;
  enclosure: IEnclosure;
}
