import { Module } from '@nestjs/common';
import { AnimalController } from './animals.controller';
import { AnimalService } from './animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals.entity';
import { Enclosure } from '../enclosures/enclosures.entity';
import { EnclosuresService } from '../enclosures/enclosures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, Enclosure])],
  controllers: [AnimalController],
  providers: [AnimalService, EnclosuresService],
})
export class AnimalsModule {}
