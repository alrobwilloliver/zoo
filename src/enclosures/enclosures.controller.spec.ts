import { Test, TestingModule } from '@nestjs/testing';
import { EnclosuresController } from './enclosures.controller';

describe('EnclosuresController', () => {
  let controller: EnclosuresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnclosuresController],
    }).compile();

    controller = module.get<EnclosuresController>(EnclosuresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
