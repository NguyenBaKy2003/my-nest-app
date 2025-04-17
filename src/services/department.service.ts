import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '../entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepo: Repository<Department>,
  ) {}

  create(data: Partial<Department>): Promise<Department> {
    const dept = this.departmentRepo.create(data);
    return this.departmentRepo.save(dept);
  }

  findAll(): Promise<Department[]> {
    return this.departmentRepo.find();
  }

  async findById(id: number): Promise<Department> {
    const department = await this.departmentRepo.findOne({
      where: { department_id: id },
    });
    if (!department) {
      throw new Error(`Department with ID ${id} not found`);
    }
    return department;
  }

  async update(id: number, data: Partial<Department>): Promise<Department> {
    await this.departmentRepo.update(id, data);
    return this.findById(id);
  }

  async delete(department_id: number): Promise<void> {
    await this.departmentRepo.delete(department_id);
  }
}
