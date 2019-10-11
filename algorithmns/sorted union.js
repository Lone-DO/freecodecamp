function uniteUnique(arr) {
  let set = [...arguments];
  let clean = [];
  set.map(values =>
    values.map(value =>
      clean.indexOf(value) === -1 ? clean.push(value) : clean
    )
  );

  console.log(clean);
  return clean;
}
console.clear();
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
