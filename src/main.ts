import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  }
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
