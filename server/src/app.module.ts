import { Module } from '@nestjs/common';
import { AppController, TaskController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
