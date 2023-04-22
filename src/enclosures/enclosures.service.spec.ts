import { Test, TestingModule } from '@nestjs/testing';
import { EnclosuresService } from './enclosures.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Enclosure } from './enclosures.entity';
import { Repository } from 'typeorm';

describe('EnclosuresService', () => {
  let service: EnclosuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnclosuresService,
        {
          provide: getRepositoryToken(Enclosure),
          useClass: Repository
        }
      ],
    }).compile();

    service = module.get<EnclosuresService>(EnclosuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
