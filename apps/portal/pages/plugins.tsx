import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Plugins: NextPage = () => {
  const [plugins, setPlugins] = useState<{ name: string; description: string }[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    fetch('http://[::1]:3000/plugins', { credentials: 'same-origin' })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok ' + res.status);
        return res.json();
      })
      .then((data) => {
        const uniquePlugins = Array.from(
          new Map(data.map((item: any) => [item.name, item])).values()
        ) as { name: string; description: string }[];
        setPlugins(uniquePlugins);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="page-wrapper">
      <header>
        <h1>Plugin Marketplace</h1>
        <button className="theme-switch" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
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