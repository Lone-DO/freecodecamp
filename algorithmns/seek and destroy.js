function destroyer(arr) {
  // Remove all the values
  let targets = [...arguments].splice(1);
  let pure = arr.filter(value => targets.indexOf(value) === -1);
  return pure;
}
console.clear();
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
