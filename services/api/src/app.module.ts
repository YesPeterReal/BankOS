import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TransactionService } from './transaction.service';
import { AIService } from './ai.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, TransactionService, AIService],
})
export class AppModule {}