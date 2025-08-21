import { PrismaService } from './prisma.service';
import { TransactionService } from './transaction.service';
import { AIService } from './ai.service';
import { PluginService } from './plugin.service';
import { Prisma } from '@prisma/client';
export declare class AppController {
    private prisma;
    private transactionService;
    private aiService;
    private pluginService;
    constructor(prisma: PrismaService, transactionService: TransactionService, aiService: AIService, pluginService: PluginService);
    getHello(): Promise<{
        message: string;
        transactionCount: number;
    }>;
    createTransaction(data: Prisma.TransactionCreateInput): Promise<{
        id: string;
        createdAt: Date;
        accountId: string;
        amount: Prisma.Decimal;
        currency: string;
        merchant: string | null;
        category: string | null;
        timestamp: Date;
        rawData: Prisma.JsonValue | null;
    }>;
    getSuggestions(accountId: string): Promise<{
        transactionId: string;
        suggestion: string;
    }[]>;
    getPlugins(): Promise<{
        id: string;
        name: string;
        description: string;
        version: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createPlugin(data: {
        name: string;
        description: string;
        version: string;
    }): Promise<{
        id: string;
        name: string;
        description: string;
        version: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
