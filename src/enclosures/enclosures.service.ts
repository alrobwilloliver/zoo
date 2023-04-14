import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { Enclosure } from './enclosures.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEnclosureDto } from '../dto/create-enclosure.dto';
import { UpdateEnclosureDto } from '../dto/update-enclosure.dto';

@Injectable()
export class EnclosuresService {
  constructor(
    @InjectRepository(Enclosure)
    private readonly enclosureRepository: Repository<Enclosure>,
  ) {}
  createEnclosure(enclosure: CreateEnclosureDto) {
    try {
      const res = this.enclosureRepository.create(enclosure);
      const savedRes = this.enclosureRepository.save(res);
      return savedRes;
    } catch (e) {
      throw new BadRequestException('Enclosure not created');
    }
  }

  getEnclosures() {
    try {
      return this.enclosureRepository.find();
    } catch (e) {
      throw new NotFoundException('Enclosure not found');
    }
  }

  async getEnclosureById(id: any) {
    try {
      console.log(id);
      const result = await this.enclosureRepository.findOne({ where: { id } });
      return result;
    } catch (e) {
      throw new NotFoundException('Enclosure not found');
    }
  }

  async updateEnclosure(id: any, updateEnclosureDto: UpdateEnclosureDto) {
    try {
      const existingEnclosure = await this.enclosureRepository.findOne({
        where: { id },
      });

      if (!existingEnclosure) {
        throw new NotFoundException('Enclosure not found');
      }

      const result = await this.enclosureRepository.save({
        ...existingEnclosure,
        ...updateEnclosureDto,
      });
      return result;
    } catch (e) {
      throw new NotFoundException('Enclosure not found');
    }
  }

  getAnimalsByEnclosureId(id: any) {
    try {
      return this.enclosureRepository.findOne({
        where: { id },
        relations: ['animals'],
      });
    } catch (e) {
      throw new NotFoundException('Enclosure not found');
    }
  }
}
