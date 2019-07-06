function getSize(length, width, height) {
  const areaAndVolume = [];
  const area = 2 * (length * width + height * width + length * height);
  const volume = length * width * height;
  areaAndVolume.push(area, volume);
  return areaAndVolume;
}

console.log(getSize(4, 2, 6)[1], 48);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);
