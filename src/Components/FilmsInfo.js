import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import Homeworld from './ComponentLinks/Homeworld';
import VehicleInsert from './ComponentLinks/VehiclesInsert';
import CharacterInsert from './ComponentLinks/CharactersInsert';
import SpeciesInsert from './ComponentLinks/SpeciesInsert';
import StarshipInsert from './ComponentLinks/StarshipsInsert';

function FilmsInfo({ id }) {
  useEffect(() => {
    const fetchFilms = async () => {
      const data = await fetcher(`https://swapi.co/api/films/${id}/`);
      setFilmInfo(data);
    };
    fetchFilms();
  }, [id]);

  const [filmInfo, setFilmInfo] = useState(null);

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
        Characters:
        {filmInfo.characters.map(character => {
          return <CharacterInsert key={character} url={character} />;
        })}
      </h1>
      <br />
      <h1>
        Planets:
        {filmInfo.planets.map(planet => {
          return <Homeworld key={planet} url={planet} />;
        })}
      </h1>
      <br />
      <h1>
        Species:
        {filmInfo.species.map(species => {
          return <SpeciesInsert key={species} url={species} />;
        })}
      </h1>
      <br />
      <h1>
        Starships:
        {filmInfo.starships.map(starship => {
          return <StarshipInsert key={starship} url={starship} />;
        })}
      </h1>
      <br />
      <h1>
        Vehicles:
        {filmInfo.vehicles.map(vehicle => {
          return <VehicleInsert key={vehicle} url={vehicle} />;
        })}
      </h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default FilmsInfo;
