import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TransactionService } from './transaction.service';
import { AIService } from './ai.service';
import { PluginService } from './plugin.service';
import { Prisma } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
    private transactionService: TransactionService,
    private aiService: AIService,
    private pluginService: PluginService,
  ) {}

  @Get()
  async getHello() {
    const count = await this.prisma.transaction.count();
    return { message: 'BankOS API', transactionCount: count };
  }

  @Post('transactions')
  async createTransaction(@Body() data: Prisma.TransactionCreateInput) {
    const transaction = await this.transactionService.createTransaction(data);
    return transaction;
  }

  @Get('suggestions/:accountId')
  async getSuggestions(@Param('accountId') accountId: string) {
    const suggestions = await this.aiService.getSuggestions(accountId);
    return suggestions;
  }

  @Get('plugins')
  async getPlugins() {
    return this.pluginService.findAll();
  }

  @Post('plugins')
  async createPlugin(@Body() data: { name: string; description: string; version: string }) {
    return this.pluginService.create(data);
  }
}