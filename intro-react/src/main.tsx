import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import RegisterPage from './pages/register/page.tsx';
import ProgramListPage from './pages/programs-list/page.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TailwindCssPage from './pages/tailwind-css/page.tsx';
import Root from './components/Root.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <App /> },
      { path: 'program-list', element: <ProgramListPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'tailwind-css', element: <TailwindCssPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
