const cache = {};

export async function fetcher(url) {
  if (cache[url]) {
    console.log('cacheHit');
    return cache[url];
  }
  const data = await fetch(url);
  const result = await data.json();
  console.log(result);
  cache[url] = result;
  console.log(cache);
  return result;
}
