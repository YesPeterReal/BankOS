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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
let AIService = class AIService {
    transactionService;
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async getSuggestions(accountId) {
        const transactions = await this.transactionService.findMany({ where: { accountId } });
        const suggestions = transactions.map(t => ({
            transactionId: t.id,
            suggestion: t.amount.toNumber() > 100 ? 'Review large transaction' : 'No action needed',
        }));
        return suggestions;
    }
};
exports.AIService = AIService;
exports.AIService = AIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], AIService);
//# sourceMappingURL=ai.service.js.map