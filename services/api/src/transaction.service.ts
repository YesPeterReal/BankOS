import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(data: Prisma.TransactionCreateInput) {
    return this.prisma.transaction.create({
      data,
    });
  }
}