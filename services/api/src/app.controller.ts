import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const count = await this.prisma.transaction.count();
    return { message: 'BankOS API', transactionCount: count };
  }
}