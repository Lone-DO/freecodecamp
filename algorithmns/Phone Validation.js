function telephoneCheck(str) {
  const arr = str.split("").filter(num => num.match(/[0-9]/));
  let isValid =
    arr.length === 10 || (arr.length === 11 && Number(arr[0]) === 1);
  let isZipped = /\(\d{3}\)/.test(str);
  let isProper = false;
  let isFormatted = /^1*.*\(*\d{3}\)*\d{3}-*\d{4}/.test(str) && isValid;
  let hasOdd = /^\D|\D$|\D[^-*]\D/g.test(str);
  let openReg = /\(/.test(str);
  let closeReg = /\)/.test(str);

  console.log(`Valid Number? ${isValid}`);
  console.log(`Has odd char? ${hasOdd}`);

  console.log(`is a number ${isFormatted}`);

  if (hasOdd && isZipped && !isFormatted) {
    return false;
  } else if (openReg || closeReg) {
    console.log(`Proper zip? ${isZipped}`);
    console.log(`Real Number? ${isValid && isZipped}`);
    isProper = isValid && isZipped;
  } else {
    isProper = isValid;
  }

  // Good luck!
  return isProper;
}
telephoneCheck("1(555)555-5555");
// telephoneCheck("15555555555");
// telephoneCheck("+1 555-555-5555");
telephoneCheck("123-**&!!asdf#");
// telephoneCheck("1 456 789 4444");
// telephoneCheck("(555)5(55?)-5555")
