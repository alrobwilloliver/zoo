import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animals.controller';
import { AnimalService } from './animals.service';

describe('AnimalController', () => {
  let animalController: AnimalController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [AnimalService],
    }).compile();

    animalController = app.get<AnimalController>(AnimalController);
  });

  describe('root', () => {
    it('should return Empty Array', () => {
      expect(animalController.findAll()).toStrictEqual([]);
    });
  });
});
