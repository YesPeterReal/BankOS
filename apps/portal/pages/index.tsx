import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-wrapper">
      <header>
        <h1>Welcome to BankOS</h1>
      </header>
      <main>
        <p>Explore our plugins!</p>
        <Link href="/plugins">Go to Plugin Marketplace</Link>
      </main>
      <footer>
        <p>&copy; 2025 BankOS</p>
      </footer>
    </div>
  );
}