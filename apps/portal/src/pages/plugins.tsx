import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Plugins: NextPage = () => {
  const [plugins, setPlugins] = useState<{ name: string; description: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/plugins') // API is on 3000
      .then((res) => res.json())
      .then((data) => setPlugins(data));
  }, []);

  return (
    <div className="page-wrapper">
      <header>
        <h1>Plugin Marketplace</h1>
      </header>
      <main>
        <div className="dashboard">
          {plugins.map((plugin, index) => (
            <div key={index} className="card plugin-card">
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