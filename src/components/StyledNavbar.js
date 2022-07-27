import { NavLink } from 'react-router-dom';
import brzLogo from '../assets/BRZ_Logo_r.svg';

const Navbar = () => {
  
  return (
    <nav className='navbar'>
     
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        <img
          className='logo'
            src={brzLogo}
            alt="logo"
          />
      </NavLink>

      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/services'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Services
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
