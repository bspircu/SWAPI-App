import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../../fetcher';
import { getId } from '../../utilities';

function StarshipInsert({ url }) {
  const [starship, setStarship] = useState(null);

  const linkStyle = {
    color: 'yellow',
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetcher(url);
    setStarship(data);
  }
  const starshipId = starship ? getId(starship) : null;
  return starship ? (
    <Link style={linkStyle} to={`/Starships/${starshipId}`}>
      <p>{starship.name}</p>
    </Link>
  ) : (
    <p>Loading...</p>
  );
}
export default StarshipInsert;
