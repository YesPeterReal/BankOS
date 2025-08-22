import { Controller, Get, Post, Body } from '@nestjs/common';
import { PluginService } from './plugin.service';

@Controller()
export class AppController {
  constructor(private pluginService: PluginService) {}

  @Get('plugins')
  async getPlugins() {
    return this.pluginService.findAll();
  }

  @Post('plugins')
  async createPlugin(@Body() data: { name: string; description: string; version: string }) {
    return this.pluginService.create(data);
  }
}