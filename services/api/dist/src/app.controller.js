"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const transaction_service_1 = require("./transaction.service");
const ai_service_1 = require("./ai.service");
const plugin_service_1 = require("./plugin.service");
const client_1 = require("@prisma/client");
let AppController = class AppController {
    prisma;
    transactionService;
    aiService;
    pluginService;
    constructor(prisma, transactionService, aiService, pluginService) {
        this.prisma = prisma;
        this.transactionService = transactionService;
        this.aiService = aiService;
        this.pluginService = pluginService;
    }
    async getHello() {
        const count = await this.prisma.transaction.count();
        return { message: 'BankOS API', transactionCount: count };
    }
    async createTransaction(data) {
        const transaction = await this.transactionService.createTransaction(data);
        return transaction;
    }
    async getSuggestions(accountId) {
        const suggestions = await this.aiService.getSuggestions(accountId);
        return suggestions;
    }
    async getPlugins() {
        return this.pluginService.findAll();
    }
    async createPlugin(data) {
        return this.pluginService.create(data);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('transactions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.Get)('suggestions/:accountId'),
    __param(0, (0, common_1.Param)('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSuggestions", null);
__decorate([
    (0, common_1.Get)('plugins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPlugins", null);
__decorate([
    (0, common_1.Post)('plugins'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createPlugin", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        transaction_service_1.TransactionService,
        ai_service_1.AIService,
        plugin_service_1.PluginService])
], AppController);
//# sourceMappingURL=app.controller.js.map