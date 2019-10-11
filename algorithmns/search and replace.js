function myReplace(str, before, after) {
  let targetReg = new RegExp(before);
  let target = str.slice(
    str.indexOf(before),
    str.indexOf(before) + before.length
  );
  let word = after.split("");

  word[0] =
    target[0] === target[0].toUpperCase()
      ? word[0].toUpperCase()
      : word[0].toLowerCase();
  word = word.join("");
  console.log(str, before, after);
  return str.replace(targetReg, word);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
