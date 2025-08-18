import { Injectable } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Injectable()
export class AIService {
  constructor(private transactionService: TransactionService) {}

  async getSuggestions(accountId: string) {
    // Mock AI suggestion: categorize recent transactions
    const transactions = await this.transactionService.findMany({ where: { accountId } });
    const suggestions = transactions.map(t => ({
      transactionId: t.id,
      suggestion: t.amount.toNumber() > 100 ? 'Review large transaction' : 'No action needed',
    }));
    return suggestions;
  }
}