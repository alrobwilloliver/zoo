import { Test, TestingModule } from '@nestjs/testing';
import { EnclosuresController } from './enclosures.controller';
import { EnclosuresService } from './enclosures.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enclosure } from './enclosures.entity';

describe('EnclosuresController', () => {
  let controller: EnclosuresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnclosuresController],
      providers: [
        EnclosuresService,
        {
          provide: getRepositoryToken(Enclosure),
          useClass: Repository
        }
      ]
    }).compile();

    controller = module.get<EnclosuresController>(EnclosuresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
