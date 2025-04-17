import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() body: Partial<Employee>) {
    return this.employeeService.create(body);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.employeeService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Employee>) {
    return this.employeeService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.employeeService.delete(+id);
  }
}
