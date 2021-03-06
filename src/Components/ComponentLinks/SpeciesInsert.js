import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../../fetcher';
import { getId } from '../../utilities';

function SpeciesInsert({ url }) {
  const [oneSpecies, setOneSpecies] = useState(null);

  const linkStyle = {
    color: 'yellow',
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetcher(url);
      setOneSpecies(data);
    }
    fetchData();
  }, [url]);

  const speciesId = oneSpecies ? getId(oneSpecies) : null;
  return oneSpecies ? (
    <Link style={linkStyle} to={`/Species/${speciesId}`}>
      <p>{oneSpecies.name}</p>
    </Link>
  ) : (
    <p>Loading...</p>
  );
}
export default SpeciesInsert;
