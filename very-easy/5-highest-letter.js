function highestLetter(str) {
  const lowerCaseString = str.toLowerCase();
  const lettersArray = lowerCaseString.split("");
  const sortedArray = lettersArray.sort();

  return sortedArray[sortedArray.lenght - 1];
}

console.log(highestLetter("Lotem ipsum sec avanti")); //v
console.log(highestLetter("Hello")); //o
console.log(highestLetter("May the force be with you")); //y
console.log(highestLetter("Its s over nine thousand")); //v
