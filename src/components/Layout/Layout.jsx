import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, MainContainer } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <MainContainer>
      <AppBar />

      <Main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer/>
    </MainContainer>
  );
};
