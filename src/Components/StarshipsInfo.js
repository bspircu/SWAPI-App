import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';
import CharacterInsert from './ComponentLinks/CharactersInsert';
import FilmsInsert from './ComponentLinks/FilmsInsert';

function StarshipsInfo({ id }) {
  useEffect(() => {
    fetchStarship();
  }, []);

  const [starshipInfo, setStarshipInfo] = useState(null);

  const fetchStarship = async () => {
    const data = await fetcher(`https://swapi.co/api/starships/${id}`);
    setStarshipInfo(data);
  };
  return starshipInfo ? (
    <div>
      <h1>Name: {starshipInfo.name}</h1>
      <h1>Model: {starshipInfo.model}</h1>
      <h1>Manufacturer: {starshipInfo.manufacturer}</h1>
      <h1>Starship Class: {starshipInfo.starship_class}</h1>
      <br />
      <h1>Passengers: {starshipInfo.passengers}</h1>
      <h1>Crew: {starshipInfo.crew}</h1>
      <h1>Consumables: {starshipInfo.consumables}</h1>
      <h1>Cargo Capacity: {starshipInfo.cargo_capacity} Kg</h1>
      <br />
      <h1>Length: {starshipInfo.length} Meters</h1>
      <h1>MGLT: {starshipInfo.MGLT}</h1>
      <h1>Max Atmosphering Speed: {starshipInfo.max_atmosphering_speed}</h1>
      <h1>Hyperdrive Rating: {starshipInfo.hyperdrive_rating}</h1>
      <h1>Cost In Credits: {starshipInfo.cost_in_credits}</h1>
      <br />
      <h1>
        Pilots:
        {starshipInfo.pilots.map(character => {
          return <CharacterInsert key={character} url={character} />;
        })}
      </h1>
      <br />
      <h1>
        Films:
        {starshipInfo.films.map(film => {
          return <FilmsInsert key={film} url={film} />;
        })}
      </h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default StarshipsInfo;
