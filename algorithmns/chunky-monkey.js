function chunkArrayInGroups(arr, size) {
  // Break it up.
  let index = 1;
  let count = 1;
  let chunked = [];
  while (chunked.length < arr.length / size) {
    let chunk = arr.slice(index - 1, size * count);
    chunked.push([...chunk]);
    count++;
    index += size;
  }
  console.log(chunked);
  return chunked;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
