import React from 'react';
type Props = {
    name: string;
    balance: number;
    currency?: string;
    accountType?: string;
    onClick?: () => void;
};
export declare const AccountTile: React.FC<Props>;
export {};
