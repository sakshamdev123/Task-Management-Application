import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './db.conn';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
