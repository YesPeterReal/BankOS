import type { NextPage } from 'next';

const Plugins: NextPage = () => {
  const plugins = [
    { name: 'Budget Tracker', description: 'Track spending habits.' },
    { name: 'Investment Analyzer', description: 'Analyze investments.' },
  ];

  return (
    <div className="page-wrapper">
      <header>
        <h1>Plugin Marketplace</h1>
      </header>
      <main>
        <div>
          {plugins.map((plugin, index) => (
            <div key={index} className="plugin-card">
              <h2>{plugin.name}</h2>
              <p>{plugin.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2025 BankOS</p>
      </footer>
    </div>
  );
};

export default Plugins;