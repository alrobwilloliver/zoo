import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Animal } from './animals.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimalDto } from 'src/dto/create-animal.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  createAnimal(animal: CreateAnimalDto) {
    try {
      const res = this.animalRepository.create(animal);
      const savedRes = this.animalRepository.save(res);
      return savedRes;
    } catch (e) {
      throw new BadGatewayException('Animal not created');
    }
  }

  getAnimals(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  async moveAnimal(animalId: number, enclosureId: any) {
    try {
      const animal = await this.animalRepository.findOne({
        where: { id: animalId },
      });

      if (!animal) {
        throw new NotFoundException('Animal does not exist');
      }

      animal.enclosure = enclosureId;

      await this.animalRepository.update(animalId, animal);
      return animal;
    } catch (e) {
      throw new BadRequestException('Animal not updated');
    }
  }
}
