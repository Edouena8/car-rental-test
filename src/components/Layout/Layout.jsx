import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </header>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>

      <footer>Footer</footer>
    </div>
  );
};
