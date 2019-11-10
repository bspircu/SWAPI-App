import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import Homeworld from './ComponentLinks/Homeworld';

function FilmsInfo({ id }) {
  useEffect(() => {
    fetchFilms();
  }, []);

  const [filmInfo, setFilmInfo] = useState(null);

  const fetchFilms = async () => {
    const data = await fetcher(`https://swapi.co/api/films/${id}`);
    setFilmInfo(data);
  };
  return filmInfo ? (
    <div>
      <h1>Title: {filmInfo.title}</h1>
      <h1>Episode Id: {filmInfo.episode_id}</h1>
      <br />
      <h1>Release Date: {filmInfo.release_date}</h1>
      <br />
      <h1>Director: {filmInfo.director}</h1>
      <h1>Producer: {filmInfo.producer}</h1>
      <br />
      <h1>
        Planets:
        {filmInfo.planets.map(planet => {
          return <Homeworld url={planet} />;
        })}
      </h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default FilmsInfo;
