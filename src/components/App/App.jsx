import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Catalog = lazy(() => import('../../pages/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
