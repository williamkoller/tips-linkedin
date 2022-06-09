function arrayUnion() {
  const data = [];

  Object.values(arguments).map((value) => data.push(...value));

  return Array.from(new Set(data));
}

console.log(arrayUnion([2, 4], [5, 7], [8]));
