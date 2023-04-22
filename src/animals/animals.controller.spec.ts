import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animals.controller';
import { AnimalService } from './animals.service';
import { EnclosuresService } from '../enclosures/enclosures.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Enclosure } from '../enclosures/enclosures.entity';
import { Animal } from './animals.entity';

describe('AnimalController', () => {
  let animalController: AnimalController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [
        AnimalService,
        {
          provide: getRepositoryToken(Animal),
          useFactory: () => ({
            find: jest.fn(() => []),
            getAnimals: jest.fn(() => [])
          })
        },
        EnclosuresService,
        {
          provide: getRepositoryToken(Enclosure),
          useFactory: () => {}
        }
      ],
    }).compile();

    animalController = app.get<AnimalController>(AnimalController);
  });

  describe('Animal Controller', () => {
    it('expect controller to be defined', () => {
      expect(animalController).toBeDefined()
    })

    const result: Animal[] = [];
    it('should return Empty Array', () => {
      expect(animalController.findAll()).toStrictEqual([]);
    });
  });
});
