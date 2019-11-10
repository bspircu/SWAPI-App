import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import Homeworld from './ComponentLinks/Homeworld';

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
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default CharacterInfo;
