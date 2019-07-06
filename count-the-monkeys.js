function monkeyCount(n) {
  const monkeyArray = [];
  for (let i = 1; monkeyArray.length + 1 <= n; i++) {
    monkeyArray.push(i);
  }
  return monkeyArray;
}

console.log(monkeyCount(5), [1, 2, 3, 4, 5]);
console.log(monkeyCount(3), [1, 2, 3]);
console.log(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
