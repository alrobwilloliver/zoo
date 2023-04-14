import { IsString, IsNotEmpty, Validate } from 'class-validator';

import { IEnclosure } from '../types/enclosure';
import { AnimalType } from '../types/animal';
import { CustomAnimalType } from '../validation/ValidateAnimalType';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  species: string;
  @IsString()
  @Validate(CustomAnimalType)
  type: AnimalType;
  @IsNotEmpty()
  enclosure: IEnclosure;
}
