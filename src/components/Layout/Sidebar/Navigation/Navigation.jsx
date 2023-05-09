import { NavLink } from 'react-router-dom';

const getActiveClassName = ({ isActive }) => {
  return isActive ? '' : '';
};

export const Navigation = () => {

  return (
    <>
      <ul>
        <li>
          <NavLink to="" className={getActiveClassName}>
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink to="" end className={getActiveClassName}>
            Contacts list
          </NavLink>
        </li>
      </ul>
    </>
  );
};