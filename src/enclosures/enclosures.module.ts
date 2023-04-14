import { Module } from '@nestjs/common';
import { EnclosuresController } from './enclosures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enclosure } from './enclosures.entity';
import { EnclosuresService } from './enclosures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Enclosure])],
  controllers: [EnclosuresController],
  providers: [EnclosuresService],
})
export class EnclosuresModule {}
