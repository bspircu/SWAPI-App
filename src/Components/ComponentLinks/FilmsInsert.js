import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../../fetcher';
import { getId } from '../../utilities';

function FilmsInsert({ url }) {
  const [film, setFilm] = useState(null);

  const linkStyle = {
    color: 'yellow',
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetcher(url);
    setFilm(data);
  }
  const filmId = film ? getId(film) : null;
  return film ? (
    <Link style={linkStyle} to={`/Films/${filmId}`}>
      <p>{film.title}</p>
    </Link>
  ) : (
    <p>Loading...</p>
  );
}
export default FilmsInsert;
