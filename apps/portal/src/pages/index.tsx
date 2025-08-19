import { AccountTile } from '@bankos/ui';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <h1>BankOS Portal</h1>
      </header>
      <main>
        <div>
          <AccountTile name="Checking Account" balance={1000} />
          <AccountTile name="Savings Account" balance={2500} />
          <Link href="/plugins">Visit Plugin Marketplace</Link>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 BankOS</p>
      </footer>
    </div>
  );
};

export default Home;