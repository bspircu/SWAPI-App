import React from 'react';

function FilmsInfo({
  title,
  director,
  episode_id,
  planets,
  producer,
  release_date,
}) {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Episode Id: {episode_id}</h1>
      <br />
      <h1>Release Date: {release_date}</h1>
      <br />
      <h1>Director: {director}</h1>
      <h1>Producer: {producer}</h1>
    </div>
  );
}

export default FilmsInfo;
