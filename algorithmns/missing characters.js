function fearNotLetter(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("").sort();
  const arr = str.split("").sort();
  let start = arr[0];
  let end = arr[arr.length - 1];
  let target = alpha.slice(alpha.indexOf(start), alpha.indexOf(end) + 1);
  let missing = target.filter(char => arr.indexOf(char) === -1);
  missing = missing.length > 0 ? missing.toString() : undefined;
  console.log(`Search: ${arr}, Results: ${target}, Missing letter: ${missing}`);
  console.log(`_____`);
  return missing;
}

fearNotLetter("abec");
fearNotLetter("stvwx");
fearNotLetter("abcdefghjklmno");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
