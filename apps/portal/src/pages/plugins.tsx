import type { NextPage } from 'next';

const Plugins: NextPage = () => {
  const plugins = [
    { name: 'Budget Tracker', description: 'Track your spending habits.' },
    { name: 'Investment Analyzer', description: 'Analyze investment options.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-400">Plugin Marketplace</h1>
      </header>
      <main className="grid gap-6">
        {plugins.map((plugin, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-400">{plugin.name}</h2>
            <p className="text-gray-400">{plugin.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Plugins;