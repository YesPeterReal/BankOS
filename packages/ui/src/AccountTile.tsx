import React from 'react';

type Props = {
  name: string;
  balance: number;
  currency?: string;
  accountType?: string;
  onClick?: () => void;
};

export const AccountTile: React.FC<Props> = ({ name, balance, currency = 'USD', onClick }) => {
  return (
    <div className="p-4 rounded-md bg-surface-2 shadow-sm hover:shadow-md cursor-pointer" onClick={onClick}>
      <div className="text-sm text-muted">{name}</div>
      <div className="mt-2 text-2xl font-semibold text-primary">{new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(balance)}</div>
    </div>
  );
};