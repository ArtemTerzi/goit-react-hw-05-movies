import { BackLink } from 'components/BackLink/BackLink';
import MovieCard from 'components/MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieCard />
    </>
  );
};

export default MovieDetailsPage;
