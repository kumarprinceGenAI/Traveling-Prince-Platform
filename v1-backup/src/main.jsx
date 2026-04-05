import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('--- DEBUG START ---');
const rootElement = document.getElementById('root');
console.log('Target element:', rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('Root created, rendering App...');
  root.render(<App />);
} else {
  console.error('CRITICAL: #root not found in DOM');
}
