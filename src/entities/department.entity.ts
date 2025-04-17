import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  department_id!: number;

  @Column()
  department_name!: string;

  @Column({ nullable: true })
  description!: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees!: Employee[];
}
