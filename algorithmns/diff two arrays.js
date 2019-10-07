console.clear();

function diffArray(arr1, arr2) {
  let newArr = [];
  let differences = [];

  if (arr2.some(value => arr1.indexOf(value) === -1)) {
    differences = arr2.filter(item => arr1.indexOf(item) === -1);
    newArr.push(...differences);
  }
  if (arr1.some(value => arr2.indexOf(value) === -1)) {
    differences = arr1.filter(item => arr2.indexOf(item) === -1);
    newArr.push(...differences);
  }
  // newArr.push(...differences);
  console.log(newArr);

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
