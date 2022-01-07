function invert(str) {
  const wordsArray = str.toLowerCase().split(" ");

  const invertedWords = wordsArray.map((word) =>
    word.split("").reverse().join("")
  );

  return invertedWords.join(" ");
}
console.log(invert("Lorem ipsum delore sec avanti"));
console.log(invert("This is an apple"));
console.log(invert("May the force be with you"));
console.log(invert("It s over nine to thousand "));
