import { IsNotEmpty } from 'class-validator';

export class MoveAnimalDto {
  @IsNotEmpty()
  enclosure: number;
}
