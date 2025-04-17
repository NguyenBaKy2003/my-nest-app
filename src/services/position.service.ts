import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from '../entities/position.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepo: Repository<Position>,
  ) {}

  create(data: Partial<Position>): Promise<Position> {
    const position = this.positionRepo.create(data);
    return this.positionRepo.save(position);
  }

  findAll(): Promise<Position[]> {
    return this.positionRepo.find();
  }

  async findById(id: number): Promise<Position> {
    const position = await this.positionRepo.findOne({
      where: { position_id: id },
    });
    if (!position) {
      throw new Error(`Position with ID ${id} not found`);
    }
    return position;
  }

  async update(id: number, data: Partial<Position>): Promise<Position> {
    await this.positionRepo.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.positionRepo.delete(id);
  }
}
