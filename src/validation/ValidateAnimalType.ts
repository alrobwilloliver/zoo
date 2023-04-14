import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { AnimalTypes } from '../constants/AnimalTypes';

@ValidatorConstraint({ name: 'customAnimalType', async: false })
export class CustomAnimalType implements ValidatorConstraintInterface {
  validate(text: string) {
    return AnimalTypes.includes(text);
  }

  defaultMessage() {
    // here you can provide default error message if validation failed
    return 'The next must be a valid animal type: mammal, reptile, fish, bird, amphibian, invertebrate';
  }
}
