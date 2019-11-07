import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PlanetsInfo from './PlanetsInfo';
import Pagination from './Pagination';
import { fetcher } from '../fetcher';

function Planets() {
  useEffect(() => {
    fetchPlanets();
  }, []);

  const [allPlanets, setAllPlanets] = useState({ results: [] });

  const fetchPlanets = async () => {
    const data = await fetcher('https://swapi.co/api/planets/');
    console.log(data);
    setAllPlanets(data);
  };

  const linkStyle = {
    color: 'yellow',
  };

  // const currentPage = allPlanets.next ? /\d+/.exec(allPlanets.next)[0] - 1 : 1;
  // console.log(currentPage);

  return (
    <div>
      <Switch>
        <Route path="/Planets/:id">
          {({ match }) => {
            const planet = allPlanets.results[match.params.id];
            return <PlanetsInfo {...planet} />;
          }}
        </Route>

        <Route path="/Planets/">
          {() => [
            ...allPlanets.results.map((planet, index) => (
              <h1 key={planet.url}>
                <Link style={linkStyle} to={`/Planets/${index}`}>
                  {planet.name}
                </Link>
              </h1>
            )),
            <Pagination
              previous={allPlanets.previous}
              next={allPlanets.next}
              setState={setAllPlanets}
              key="pagination"
            />,
          ]}
        </Route>
      </Switch>
    </div>
  );
}

export default Planets;
