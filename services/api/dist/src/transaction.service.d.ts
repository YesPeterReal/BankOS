import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findMany(args: Prisma.TransactionFindManyArgs): Promise<{
        id: string;
        createdAt: Date;
        accountId: string;
        amount: Prisma.Decimal;
        currency: string;
        merchant: string | null;
        category: string | null;
        timestamp: Date;
        rawData: Prisma.JsonValue | null;
    }[]>;
}
