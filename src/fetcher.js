const cache = {};

export async function fetcher(url) {
  if (cache[url]) {
    return cache[url];
  }
  const data = await fetch(url);
  const result = await data.json();
  cache[url] = result;
  return result;
}
