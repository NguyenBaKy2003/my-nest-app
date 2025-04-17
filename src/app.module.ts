import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Employee } from './entities/employee.entity';
import { Department } from './entities/department.entity';
import { Position } from './entities/position.entity';
import { User } from './entities/user.entity';
import { UserModule } from './module/user.module';
import { DepartmentModule } from './module/department.module';
import { PositionModule } from './module/position.module';
import { EmployeeModule } from './module/employee.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    DepartmentModule,
    PositionModule,
    EmployeeModule,
    TypeOrmModule.forFeature([Employee, Department, Position, User]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
