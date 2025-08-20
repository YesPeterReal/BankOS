import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PluginService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.plugin.findMany();
  }

  async create(data: { name: string; description: string; version: string }) {
    return this.prisma.plugin.create({ data });
  }
}