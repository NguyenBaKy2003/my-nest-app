import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PositionService } from '../services/position.service';
import { Position } from '../entities/position.entity';

@Controller('positions')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() data: Partial<Position>): Promise<Position> {
    return this.positionService.create(data);
  }

  @Get()
  findAll(): Promise<Position[]> {
    return this.positionService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Position> {
    return this.positionService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Position>,
  ): Promise<Position> {
    return this.positionService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.positionService.delete(id);
  }
}
