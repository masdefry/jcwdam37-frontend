import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import RegisterPage from './pages/register/page.tsx';
import ProgramListPage from './pages/programs-list/page.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TailwindCssPage from './pages/tailwind-css/page.tsx';
import Root from './components/Root.tsx';
import StatePage from './pages/react-hooks/use-state/page.tsx';
import RefPage from './pages/react-hooks/use-ref/page.tsx';
import EffectPage from './pages/react-hooks/use-effect/page.tsx';
import BrowserStoragePage from './pages/browser-storage/page.tsx';
import GlobalStatePage from './pages/global-state/page.tsx';
import ProductPage from './pages/products/page.tsx';
import LoginPage from './pages/login/page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <App /> },
      { path: 'program-list', element: <ProgramListPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'tailwind-css', element: <TailwindCssPage /> },
      {
        path: 'react-hooks/use-state',
        element: <StatePage />,
      },
      {
        path: 'react-hooks/use-ref',
        element: <RefPage />,
      },
      {
        path: 'react-hooks/use-effect',
        element: <EffectPage />,
      },
      {
        path: 'browser-storage',
        element: <BrowserStoragePage />,
      },
      {
        path: 'global-state',
        element: <GlobalStatePage />,
      },
      {
        path: 'products',
        element: <ProductPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
