import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import Homeworld from './ComponentLinks/Homeworld';
import VehicleInsert from './ComponentLinks/VehiclesInsert';
import FilmsInsert from './ComponentLinks/FilmsInsert';
import SpeciesInsert from './ComponentLinks/SpeciesInsert';
import StarshipInsert from './ComponentLinks/StarshipsInsert';

function CharacterInfo({ id }) {
  useEffect(() => {
    fetchCharacter();
  }, []);

  const [characterInfo, setCharacterInfo] = useState(null);

  const fetchCharacter = async () => {
    const data = await fetcher(`https://swapi.co/api/people/${id}`);
    setCharacterInfo(data);
  };

  return characterInfo ? (
    <div>
      <h1>Name: {characterInfo.name}</h1>
      <h1>Gender: {characterInfo.gender}</h1>
      <br />
      <h1>Height: {characterInfo.height} Cm</h1>
      <h1>Mass: {characterInfo.mass} Kg</h1>
      <h1>Eye Color: {characterInfo.eye_color}</h1>
      <h1>Hair Color: {characterInfo.hair_color}</h1>
      <h1>Skin Color: {characterInfo.skin_color}</h1>
      <h1>Brith Year: {characterInfo.birth_year}</h1>
      <br />
      <h1>
        Home World:
        <Homeworld url={characterInfo.homeworld} />
      </h1>
      <br />
      <h1>
        Vehicles:
        {characterInfo.vehicles.map(vehicle => {
          return <VehicleInsert key={vehicle} url={vehicle} />;
        })}
      </h1>
      <br />
      <h1>
        Starships:
        {characterInfo.starships.map(starship => {
          return <StarshipInsert key={starship} url={starship} />;
        })}
      </h1>
      <br />
      <h1>
        Films:
        {characterInfo.films.map(film => {
          return <FilmsInsert key={film} url={film} />;
        })}
      </h1>
      <br />
      <h1>
        Species:
        <SpeciesInsert url={characterInfo.species} />
      </h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default CharacterInfo;
