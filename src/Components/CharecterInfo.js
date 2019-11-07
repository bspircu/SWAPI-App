import React from 'react';

function CharacterInfo({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  skin_color,
  mass,
  homeworld,
}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Gender: {gender}</h1>
      <br />
      <h1>Height: {height} Cm</h1>
      <h1>Mass: {mass} Kg</h1>
      <h1>Eye Color: {eye_color}</h1>
      <h1>Hair Color: {hair_color}</h1>
      <h1>Skin Color: {skin_color}</h1>
      <h1>Brith Year: {birth_year}</h1>
      <br />
      <h1>Home World: {homeworld}</h1>
    </div>
  );
}

export default CharacterInfo;
