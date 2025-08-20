import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TransactionService } from './transaction.service';
import { AIService } from './ai.service';
import { PluginService } from './plugin.service';

@Module({
  controllers: [AppController],
  providers: [PrismaService, TransactionService, AIService, PluginService],
})
export class AppModule {}