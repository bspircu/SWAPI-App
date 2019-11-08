import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../../fetcher';
import { getId } from '../../utilities';

function Homeworld({ url }) {
  const [homePlanet, setHomePlanet] = useState(null);

  const linkStyle = {
    color: 'yellow',
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetcher(url);
    setHomePlanet(data);
  }
  const planetId = homePlanet ? getId(homePlanet) : null;
  return homePlanet ? (
    <Link style={linkStyle} to={`/Planets/${planetId}`}>
      <p>{homePlanet.name}</p>
    </Link>
  ) : (
    <p>Loading...</p>
  );
}
export default Homeworld;
