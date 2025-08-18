import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TransactionService } from './transaction.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, TransactionService],
})
export class AppModule {}