import { AccountTile } from '@bankos/ui';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-400">BankOS Portal</h1>
      </header>
      <main className="flex flex-col gap-6">
        <AccountTile name="Checking Account" balance={1000} />
        <AccountTile name="Savings Account" balance={2500} />
        <Link href="/plugins" className="text-green-400 hover:text-green-300 underline mt-4">
          Visit Plugin Marketplace
        </Link>
      </main>
      <footer className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 BankOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;