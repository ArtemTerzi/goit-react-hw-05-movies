import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const BackLink = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  return (
    <button>
      <Link to={backLinkHref.current}>Go back</Link>
    </button>
  );
};
