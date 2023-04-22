import {
  Controller,
  Get,
  Post,
  Body,
  NotFoundException,
  BadRequestException,
  Put,
  Param,
} from '@nestjs/common';
import { AnimalService } from './animals.service';
import { EnclosuresService } from '../enclosures/enclosures.service';
import { IAnimal } from '../types/animal';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { MoveAnimalDto } from '../dto/move-animal.dto';

@Controller('animals')
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService,
    private readonly enclosureService: EnclosuresService,
  ) {}

  @Post()
  async addAnimal(
    @Body() createAnimalDto: CreateAnimalDto,
  ): Promise<IAnimal | void> {
    const enclosure = await this.enclosureService.getEnclosureById(
      createAnimalDto.enclosure,
    );
    if (!enclosure) {
      throw new NotFoundException('You need an enclosure to add an animal');
    }

    const res = await this.animalService.createAnimal(createAnimalDto);
    if (!res) {
      throw new BadRequestException('Animal not created');
    }
    return res;
  }

  @Get()
  async findAll(): Promise<IAnimal[]> {
    return this.animalService.getAnimals();
  }

  @Put(':id/move')
  async moveAnimalEnclosure(
    @Param('id') animalId: number,
    @Body() moveAnimalDto: MoveAnimalDto,
  ) {
    return this.animalService.moveAnimal(animalId, moveAnimalDto.enclosure);
  }
}
