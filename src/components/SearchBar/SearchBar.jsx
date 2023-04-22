import { fetchMoviesByQuery } from 'helpers/FetchAPI';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, Input, ListItem } from './SearchBar.styled';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    async function fetchMovieList() {
      const movieList = await fetchMoviesByQuery(query);
      setMovies(movieList);
    }

    fetchMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams(`query=${query}`);
    fetchMoviesByQuery(query).then(setMovies).catch(console.error);
  };

  const handleChange = e => {
    const query = e.target.value;
    const queryParams = query !== '' ? { query } : {};
    setSearchParams(queryParams);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input name="query" type="text" value={query} onChange={handleChange} />
        <Button type="sumbit">Search</Button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
