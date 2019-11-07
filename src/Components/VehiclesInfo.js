import React from 'react';

function VehiclesInfo({
  name,

  cargo_capacity,
  consumables,
  cost_in_credits,
  crew,

  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  passengers,
  vehicle_class,
}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Model: {model}</h1>
      <h1>Manufacturer: {manufacturer}</h1>
      <h1>Vehicle Class: {vehicle_class}</h1>
      <br />
      <h1>Passengers: {passengers}</h1>
      <h1>Crew: {crew}</h1>
      <h1>Consumables: {consumables}</h1>
      <h1>Cargo Capacity: {cargo_capacity} Kg</h1>
      <br />
      <h1>Length: {length} Meters</h1>
      <h1>Max Atmosphering Speed: {max_atmosphering_speed}</h1>
      <h1>Cost In Credits: {cost_in_credits}</h1>
    </div>
  );
}

export default VehiclesInfo;
