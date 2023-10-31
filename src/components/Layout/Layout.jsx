import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <AppBar />

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer/>
    </div>
  );
};
