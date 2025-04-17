import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
import { Department } from '../entities/department.entity';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body() data: Partial<Department>): Promise<Department> {
    return this.departmentService.create(data);
  }

  @Get()
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Department> {
    return this.departmentService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Department>,
  ): Promise<Department> {
    return this.departmentService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.departmentService.delete(id);
  }
}
