import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetcher } from '../../fetcher';
import { getId } from '../../utilities';

function VehicleInsert({ url }) {
  const [vehicle, setVehicle] = useState(null);

  const linkStyle = {
    color: 'yellow',
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetcher(url);
      setVehicle(data);
    }
    fetchData();
  }, [url]);

  const vehicleId = vehicle ? getId(vehicle) : null;
  return vehicle ? (
    <Link style={linkStyle} to={`/Vehicles/${vehicleId}`}>
      <p>{vehicle.name}</p>
    </Link>
  ) : (
    <p>Loading...</p>
  );
}
export default VehicleInsert;
