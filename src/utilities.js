export function getId(data) {
  return /\d+/.exec(data.url)[0];
}
