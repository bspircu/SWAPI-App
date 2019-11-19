import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import FilmsInsert from './ComponentLinks/FilmsInsert';
import CharacterInsert from './ComponentLinks/CharactersInsert';

function PlanetsInfo({ id }) {
  useEffect(() => {
    const fetchPlanet = async () => {
      const data = await fetcher(`https://swapi.co/api/planets/${id}/`);
      setPlanetInfo(data);
    };
    fetchPlanet();
  }, [id]);

  const [planetInfo, setPlanetInfo] = useState(null);

  return planetInfo ? (
    <div>
      <h1>Name: {planetInfo.name}</h1>
      <h1>Population: {planetInfo.population}</h1>
      <h1>Climate: {planetInfo.climate}</h1>
      <br />
      <h1>Diameter: {planetInfo.diameter} Km</h1>
      <h1>Gravity: {planetInfo.gravity} G's</h1>
      <h1>Orbital Period: {planetInfo.orbital_period} Days</h1>
      <h1>Rotation Period: {planetInfo.rotation_period} Hrs</h1>
      <br />
      <h1>Surface Water: {planetInfo.surface_water}%</h1>
      <h1>Terrain: {planetInfo.terrain}</h1>
      <br />
      {planetInfo.residents.length > 0 && (
        <h1>
          Residents:
          {planetInfo.residents.map(charecter => {
            return <CharacterInsert key={charecter} url={charecter} />;
          })}
        </h1>
      )}
      <br />
      {planetInfo.films.length > 0 && (
        <h1>
          Films:
          {planetInfo.films.map(film => {
            return <FilmsInsert key={film} url={film} />;
          })}
        </h1>
      )}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default PlanetsInfo;
