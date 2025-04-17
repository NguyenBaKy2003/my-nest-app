import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id!: number;

  @ManyToOne(() => Employee, (employee) => employee.users)
  employee!: Employee;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column()
  role!: string;

  @Column({ default: 'active' })
  status!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;
}
