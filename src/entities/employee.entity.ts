import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Department } from './department.entity';
import { Position } from './position.entity';
import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employee_id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  phone_number!: string;

  @Column({ type: 'date', nullable: false, default: () => 'CURRENT_DATE' })
  hire_date!: Date;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  salary!: number;

  @ManyToOne(() => Department, (department) => department.employees)
  department!: Department;

  @ManyToOne(() => Position, (position) => position.employees)
  position!: Position;

  @ManyToOne(() => Employee, { nullable: true })
  manager!: Employee;

  @OneToMany(() => User, (user) => user.employee)
  users!: User[];
}
