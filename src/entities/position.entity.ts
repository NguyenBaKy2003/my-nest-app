import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  position_id!: number;

  @Column()
  position_name!: string;

  @Column({ nullable: true })
  description!: string;

  @OneToMany(() => Employee, (employee) => employee.position)
  employees!: Employee[];
}
