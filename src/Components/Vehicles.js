import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import VehiclesInfo from './VehiclesInfo';
import Pagination from './Pagination';

function Vehicles() {
  useEffect(() => {
    fetchVehicles();
  }, []);

  const [allVehicles, setAllVehicles] = useState({ results: [] });

  const fetchVehicles = async () => {
    const data = await fetch('https://swapi.co/api/vehicles/');
    const vehicles = await data.json();
    console.log(vehicles);
    setAllVehicles(vehicles);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Vehicles/:id">
          {({ match }) => {
            console.log(match);
            const vehicle = allVehicles.results[match.params.id];
            console.log(vehicle);
            return <VehiclesInfo {...vehicle} />;
          }}
        </Route>

        <Route path="/Vehicles">
          {() => [
            ...allVehicles.results.map((vehicle, index) => (
              <h1 key={vehicle.url}>
                <Link style={linkStyle} to={`/Vehicles/${index}`}>
                  {vehicle.name}
                </Link>
              </h1>
            )),
            <Pagination
              previous={allVehicles.previous}
              next={allVehicles.next}
              setState={setAllVehicles}
              key="pagination"
            />,
          ]}
        </Route>
      </Switch>
    </div>
  );
}

export default Vehicles;
