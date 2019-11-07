import React, { useState, useEffect } from 'react';
import { fetcher } from '../../fetcher';

function Homeworld({ url }) {
  const [homePlanet, setHomePlanet] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetcher(url);
    console.log(data);
    setHomePlanet(data.name);
    console.log(url);
  }

  return (
    <>
      <p>{homePlanet}</p>
    </>
  );
}
export default Homeworld;
