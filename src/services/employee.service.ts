import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  create(data: Partial<Employee>) {
    const employee = this.employeeRepo.create(data);
    return this.employeeRepo.save(employee);
  }

  findAll() {
    return this.employeeRepo.find({
      relations: ['department', 'position', 'manager'],
    });
  }

  findById(id: number) {
    return this.employeeRepo.findOne({
      where: { employee_id: id },
      relations: ['department', 'position', 'manager'],
    });
  }

  async update(id: number, data: Partial<Employee>) {
    await this.employeeRepo.update(id, data);
    return this.findById(id);
  }

  delete(id: number) {
    return this.employeeRepo.delete(id);
  }
}
