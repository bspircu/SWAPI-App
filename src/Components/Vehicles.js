import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import VehiclesInfo from './VehiclesInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Vehicles() {
  useEffect(() => {
    fetchVehicles();
  }, []);

  const [allVehicles, setAllVehicles] = useState(null);

  const fetchVehicles = async () => {
    const data = await fetcher('https://swapi.co/api/vehicles/');
    augmentVehicles(data);
  };

  // augmenter takes data and adds id prop based on url
  //makes pushing data into pagination component possible.
  const augmentVehicles = data => {
    const dataWithIds = {
      ...data,
      results: data.results.map(vehicles => {
        const id = /\d+/.exec(vehicles.url)[0];
        return { ...vehicles, id };
      }),
    };
    setAllVehicles(dataWithIds);
  };

  const linkStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <Switch>
        <Route path="/Vehicles/:id">
          {({ match }) => {
            return <VehiclesInfo id={match.params.id} />;
          }}
        </Route>

        <Route path="/Vehicles">
          {() =>
            allVehicles ? (
              [
                ...allVehicles.results.map(vehicle => (
                  <h1 key={vehicle.url}>
                    <Link style={linkStyle} to={`/Vehicles/${vehicle.id}`}>
                      {vehicle.name}
                    </Link>
                  </h1>
                )),
                <Pagination
                  previous={allVehicles.previous}
                  next={allVehicles.next}
                  setState={augmentVehicles}
                  key="pagination"
                />,
              ]
            ) : (
              <h1>Loading...</h1>
            )
          }
        </Route>
      </Switch>
    </div>
  );
}

export default Vehicles;
