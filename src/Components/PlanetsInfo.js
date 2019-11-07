import React from 'react';

function PlanetsInfo({
  name,
  climate,
  diameter,
  gravity,
  orbital_period,
  population,
  rotation_period,
  surface_water,
  terrain,
}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Population: {population}</h1>
      <h1>Climate: {climate}</h1>
      <br />
      <h1>Diameter: {diameter} Km</h1>
      <h1>Gravity: {gravity} G's</h1>
      <h1>Orbital Period: {orbital_period} Days</h1>
      <h1>Rotation Period: {rotation_period} Hrs</h1>
      <br />
      <h1>Surface Water: {surface_water}%</h1>
      <h1>Terrain: {terrain}</h1>
    </div>
  );
}

export default PlanetsInfo;
