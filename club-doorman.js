function passTheDoorMan(word) {
  // find the double letter
  let letter;
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      break;
    }
    letter = word[i];
  }

  // get position of double letter in alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const position = alphabet.indexOf(letter) + 1;

  // multiply by 3
  return position * 3;
}

console.log(passTheDoorMan('lettuce'), 60);
console.log(passTheDoorMan('hill'), 36);
console.log(passTheDoorMan('apple'), 48);
