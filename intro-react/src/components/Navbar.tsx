import { CgMenuCheese } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

export default function Navbar() {
  const { email } = useAuthStore();

  return (
    <>
      <nav className='bg-blue-300 flex justify-between items-center p-3'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <div className='hidden md:flex items-center gap-3'>
          <NavLink to='/program-list'>Program</NavLink>
          <NavLink to='/tailwind-css'>Tailwind</NavLink>
          <BiDotsHorizontalRounded className='text-xl' />
        </div>
        <div className='flex items-center gap-3'>
          {email ? (
            <p>{email}</p>
          ) : (
            <>
              <button className='hidden md:block bg-white p-3 rounded-md'>
                <NavLink to='/register'>Signin</NavLink>
              </button>
              <button className='hidden md:block'>Register</button>
              <CgMenuCheese className='text-xl md:hidden' />
            </>
          )}
        </div>
      </nav>
    </>
  );
}
