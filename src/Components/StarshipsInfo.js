import React from 'react';

function StarshipsInfo({
  name,
  MGLT,
  cargo_capacity,
  consumables,
  cost_in_credits,
  crew,
  hyperdrive_rating,
  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  passengers,
  starship_class,
}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Model: {model}</h1>
      <h1>Manufacturer: {manufacturer}</h1>
      <h1>Starship Class: {starship_class}</h1>
      <br />
      <h1>Passengers: {passengers}</h1>
      <h1>Crew: {crew}</h1>
      <h1>Consumables: {consumables}</h1>
      <h1>Cargo Capacity: {cargo_capacity} Kg</h1>
      <br />
      <h1>Length: {length} Meters</h1>
      <h1>MGLT: {MGLT}</h1>
      <h1>Max Atmosphering Speed: {max_atmosphering_speed}</h1>
      <h1>Hyperdrive Rating: {hyperdrive_rating}</h1>
      <h1>Cost In Credits: {cost_in_credits}</h1>
    </div>
  );
}

export default StarshipsInfo;
