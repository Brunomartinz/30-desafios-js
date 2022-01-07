function chunk(num) {
  if (num === 0) {
    return "";
  }
  if (num === 1) {
    return "chunk";
  } else {
    return "chunk-" + chunk(num - 1);
  }
}

console.log(chunk(4));
console.log(chunk(1));
console.log(chunk(8));
console.log(chunk(2));
