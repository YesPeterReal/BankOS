import { TransactionService } from './transaction.service';
export declare class AIService {
    private transactionService;
    constructor(transactionService: TransactionService);
    getSuggestions(accountId: string): Promise<{
        transactionId: string;
        suggestion: string;
    }[]>;
}
