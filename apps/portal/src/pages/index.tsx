import { AccountTile } from '@bankos/ui';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-deep-navy text-pure-white font-inter flex flex-col">
      <header className="p-6">
        <h1 className="text-3xl font-spaceGrotesk text-bankos-cyan antialiased">BankOS Portal</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="flex flex-col gap-4">
          <AccountTile name="Checking Account" balance={1000} />
          <AccountTile name="Savings Account" balance={2500} />
          <Link href="/plugins" className="text-bankos-cyan hover:text-success-green underline mt-4 antialiased">
            Visit Plugin Marketplace
          </Link>
        </div>
      </main>
      <footer className="p-6 text-center text-cool-gray antialiased">
        <p>&copy; 2025 BankOS</p>
      </footer>
    </div>
  );
};

export default Home;