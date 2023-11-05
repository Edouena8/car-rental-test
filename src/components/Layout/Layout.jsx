import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrap } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Wrap>
      <AppBar />

      <Main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer />
    </Wrap>
  );
};
