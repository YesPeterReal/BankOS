import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { PluginService } from './plugin.service';

@Module({
  controllers: [AppController],
  providers: [PrismaService, PluginService],
})
export class AppModule {}