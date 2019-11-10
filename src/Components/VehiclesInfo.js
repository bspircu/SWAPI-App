import React, { useState, useEffect } from 'react';
import { fetcher } from '../fetcher';

function VehiclesInfo({ id }) {
  useEffect(() => {
    fetchVehicle();
  }, []);

  const [vehicleInfo, setVehicleInfo] = useState(null);

  const fetchVehicle = async () => {
    const data = await fetcher(`https://swapi.co/api/vehicles/${id}`);
    setVehicleInfo(data);
  };
  console.log(vehicleInfo);
  return vehicleInfo ? (
    <div>
      <h1>Name: {vehicleInfo.name}</h1>
      <h1>Model: {vehicleInfo.model}</h1>
      <h1>Manufacturer: {vehicleInfo.manufacturer}</h1>
      <h1>Vehicle Class: {vehicleInfo.vehicle_class}</h1>
      <br />
      <h1>Passengers: {vehicleInfo.passengers}</h1>
      <h1>Crew: {vehicleInfo.crew}</h1>
      <h1>Consumables: {vehicleInfo.consumables}</h1>
      <h1>Cargo Capacity: {vehicleInfo.cargo_capacity} Kg</h1>
      <br />
      <h1>Length: {vehicleInfo.length} Meters</h1>
      <h1>Max Atmosphering Speed: {vehicleInfo.max_atmosphering_speed}</h1>
      <h1>Cost In Credits: {vehicleInfo.cost_in_credits}</h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default VehiclesInfo;
