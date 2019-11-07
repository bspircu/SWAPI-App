import React from 'react';

function SpeciesInfo({
  name,
  language,
  eye_colors,
  average_height,
  average_lifespan,
  classification,
  designation,
  hair_colors,
  skin_colors,
}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Language: {language}</h1>
      <h1>Eye Colors: {eye_colors}</h1>
      <h1>Hair Colors: {hair_colors}</h1>
      <h1>Skin Colors: {skin_colors}</h1>
      <br />
      <h1>Classification: {classification}</h1>
      <h1>Designation: {designation}</h1>
      <br />
      <h1>Average Lifespan: {average_lifespan} Years</h1>
      <h1>Average Height: {average_height} Cm</h1>
    </div>
  );
}

export default SpeciesInfo;
