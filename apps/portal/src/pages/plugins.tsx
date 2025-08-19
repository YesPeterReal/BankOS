import type { NextPage } from 'next'; // Imports Next.js page type
import { useEffect, useState } from 'react'; // Hooks for state and side effects

const Plugins: NextPage = () => {
  const [plugins, setPlugins] = useState<{ name: string; description: string }[]>([]); // State to hold plugin data

  useEffect(() => {
    // Fetch plugins from the API when the component mounts
    fetch('http://localhost:3000/plugins')
      .then((res) => res.json()) // Parse JSON response
      .then((data) => setPlugins(data)); // Update state with fetched data
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="page-wrapper"> {/* Wrapper for full-height flex layout */}
      <header> {/* Header section */}
        <h1>Plugin Marketplace</h1> {/* Title with BankOS accent color */}
      </header>
      <main> {/* Main content area */}
        <div className="dashboard"> {/* Grid layout for cards */}
          {plugins.map((plugin, index) => (
            <div key={index} className="card plugin-card"> {/* Styled card for each plugin */}
              <h2>{plugin.name}</h2> {/* Plugin name */}
              <p>{plugin.description}</p> {/* Plugin description */}
            </div>
          ))}
        </div>
      </main>
      <footer> {/* Footer with alignment */}
        <p>&copy; 2025 BankOS all right reserved</p>
      </footer>
    </div>
  );
};

export default Plugins; // Export the page component