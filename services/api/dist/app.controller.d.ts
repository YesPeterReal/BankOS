import { PluginService } from './plugin.service';
export declare class AppController {
    private pluginService;
    constructor(pluginService: PluginService);
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
