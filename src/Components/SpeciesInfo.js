import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import Homeworld from './ComponentLinks/Homeworld';
import CharacterInsert from './ComponentLinks/CharactersInsert';
import FilmsInsert from './ComponentLinks/FilmsInsert';

function SpeciessInfo({ id }) {
  useEffect(() => {
    fetchSpecies();
  }, []);

  const [speciesInfo, setSpeciesInfo] = useState(null);

  const fetchSpecies = async () => {
    const data = await fetcher(`https://swapi.co/api/species/${id}`);
    setSpeciesInfo(data);
  };
  return speciesInfo ? (
    <div>
      <h1>Name: {speciesInfo.name}</h1>
      <h1>Language: {speciesInfo.language}</h1>
      <h1>Eye Colors: {speciesInfo.eye_colors}</h1>
      <h1>Hair Colors: {speciesInfo.hair_colors}</h1>
      <h1>Skin Colors: {speciesInfo.skin_colors}</h1>
      <br />
      <h1>Classification: {speciesInfo.classification}</h1>
      <h1>Designation: {speciesInfo.designation}</h1>
      <br />
      <h1>Average Lifespan: {speciesInfo.average_lifespan} Years</h1>
      <h1>Average Height: {speciesInfo.average_height} Cm</h1>
      <br />
      <h1>
        Home World:
        <Homeworld url={speciesInfo.homeworld} />
      </h1>
      <brc />
      <h1>
        Characters:
        {speciesInfo.people.map(character => {
          return <CharacterInsert key={character} url={character} />;
        })}
      </h1>
      <h1>
        Films:
        {speciesInfo.films.map(film => {
          return <FilmsInsert key={film} url={film} />;
        })}
      </h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default SpeciessInfo;
