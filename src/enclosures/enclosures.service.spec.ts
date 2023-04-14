import { Test, TestingModule } from '@nestjs/testing';
import { EnclosuresService } from './enclosures.service';

describe('EnclosuresService', () => {
  let service: EnclosuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnclosuresService],
    }).compile();

    service = module.get<EnclosuresService>(EnclosuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
