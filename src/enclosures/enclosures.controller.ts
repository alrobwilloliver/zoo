import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';

import { CreateEnclosureDto } from '../dto/create-enclosure.dto';
import { UpdateEnclosureDto } from '../dto/update-enclosure.dto';
import { IEnclosure } from '../types/enclosure';
import { EnclosuresService } from './enclosures.service';

@Controller('enclosures')
export class EnclosuresController {
  constructor(private readonly enclosuresService: EnclosuresService) {}

  @Post()
  addEnclosure(
    @Body() createEnclosureDto: CreateEnclosureDto,
  ): Promise<IEnclosure> {
    return this.enclosuresService.createEnclosure(createEnclosureDto);
  }

  @Get()
  async findAll(): Promise<IEnclosure[] | undefined> {
    return this.enclosuresService.getEnclosures();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IEnclosure | null> {
    return this.enclosuresService.getEnclosureById(id);
  }

  @Patch(':id')
  async updateEnclosure(
    @Param('id') id: string,
    @Body() updateEnclosureDto: UpdateEnclosureDto,
  ): Promise<IEnclosure | null> {
    return this.enclosuresService.updateEnclosure(id, updateEnclosureDto);
  }

  @Get(':id/animals')
  async getAnimalsByEnclosureId(
    @Param('id') id: string,
  ): Promise<IEnclosure | null> {
    return this.enclosuresService.getAnimalsByEnclosureId(id);
  }
}
