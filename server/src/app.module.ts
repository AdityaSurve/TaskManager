import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class AppModule {}
