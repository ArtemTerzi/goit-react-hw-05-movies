import { fetchTrendMovies } from 'helpers/FetchAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from './TrendingMoviesList.styled';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(response => setMovies(response));
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
