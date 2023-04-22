import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import(`../components/SharedLayout`));
const HomePage = lazy(() => import(`../pages/HomePage`));
const MoviesPage = lazy(() => import(`../pages/MoviesPage`));
const MovieDetailsPage = lazy(() => import(`../pages/MovieDetailsPage`));
const Cast = lazy(() => import(`../components/Cast`));
const Reviews = lazy(() => import(`../components/Reviews`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
