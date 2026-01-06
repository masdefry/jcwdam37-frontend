import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';

export default function Root() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
