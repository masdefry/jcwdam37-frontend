Hello Students! 😉

🖥️ Install dan config react-router-dom

    1.  Install dependency:

                npm i react-router-dom

    2.  Tambahkan code berikut di file `main.tsx`:

                import { createBrowserRouter, RouterProvider } from 'react-router-dom';

                const router = createBrowserRouter([
                    { path: '/', element: <App /> },
                    { path: '/program-list', element: <ProgramListPage /> },
                    { path: '/register', element: <RegisterPage /> },
                ]);

                createRoot(document.getElementById('root')!).render(
                    <StrictMode>
                        <RouterProvider router={router} />
                    </StrictMode>
                );
