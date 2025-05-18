
import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Импортируем шрифты Montserrat и Rubik
const linkElement1 = document.createElement('link');
linkElement1.rel = 'stylesheet';
linkElement1.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';

const linkElement2 = document.createElement('link');
linkElement2.rel = 'stylesheet';
linkElement2.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap';

document.head.appendChild(linkElement1);
document.head.appendChild(linkElement2);

createRoot(document.getElementById("root")!).render(<App />);
