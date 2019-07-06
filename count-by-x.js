function countBy(x, n) {
  const z = [];

  for (let i = x; z.length + 1 <= n; i += x) {
    z.push(i);
  }
  return z;
}

console.log(countBy(1, 5), [1, 2, 3, 4, 5]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);
console.log(countBy(3, 2), [3, 6]);
