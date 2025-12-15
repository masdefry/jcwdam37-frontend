import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import RegisterPage from './pages/register/page.tsx';
import ProgramListPage from './pages/programs-list/page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RegisterPage /> */}
    <ProgramListPage />
  </StrictMode>
);
