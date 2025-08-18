import type { NextPage } from 'next';

const Plugins: NextPage = () => {
  const plugins = [
    { name: 'Budget Tracker', description: 'Track spending habits.' },
    { name: 'Investment Analyzer', description: 'Analyze investments.' },
  ];

  return (
    <div className="min-h-screen bg-deep-navy text-pure-white font-inter flex flex-col">
      <header className="p-6">
        <h1 className="text-3xl font-spaceGrotesk text-bankos-cyan antialiased">Plugin Marketplace</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="grid gap-4">
          {plugins.map((plugin, index) => (
            <div key={index} className="p-4 bg-indigo-accent rounded-lg">
              <h2 className="text-xl font-spaceGrotesk text-bankos-cyan antialiased">{plugin.name}</h2>
              <p className="text-cool-gray antialiased">{plugin.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-cool-gray antialiased">
        <p>&copy; 2025 BankOS</p>
      </footer>
    </div>
  );
};

export default Plugins;