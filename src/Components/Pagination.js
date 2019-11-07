import React from 'react';
import { fetcher } from '../fetcher';

function Pagination({ setState, previous, next }) {
  async function handlePreviousClick() {
    const data = await fetcher(previous);
    setState(data);
  }
  async function handleNextClick() {
    const data = await fetcher(next);
    setState(data);
  }
  return (
    <>
      {previous && <button onClick={handlePreviousClick}>Previous</button>}

      {next && <button onClick={handleNextClick}>Next</button>}
    </>
  );
}

export default Pagination;
