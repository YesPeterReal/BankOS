import { PrismaService } from './prisma.service';
export declare class PluginService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        description: string;
        version: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(data: {
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
