import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Bật CORS cho tất cả các yêu cầu
  await app.listen(3000); // Cổng mặc định
}
bootstrap();
