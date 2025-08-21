import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Plugins: NextPage = () => {
  const [plugins, setPlugins] = useState<{ name: string; description: string }[]>([]);

  useEffect(() => {
    fetch('http://[::1]:3000/plugins', { credentials: 'same-origin' })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok ' + res.status);
        return res.json();
      })
      .then((data) => setPlugins(data))
      .catch((error) => console.error('Fetch error:', error));
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