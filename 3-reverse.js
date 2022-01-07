function reverse(arr) {
  const reversedArray = [];

  for (i = 0; i < arr.lenght; i++) {
    reversedArray[i] = arr[arr.lenght - 1 - i];
  }
  return reversedArray;
}

console.log(reverse([0, 9, 5, 4, 32, 1, 3]));
console.log(reverse(["Oh", "Hi", "Mark"]));
console.log(reverse([false, true, false, true, true, true]));
console.log(reverse(["Its not", 12, true, 0]));
