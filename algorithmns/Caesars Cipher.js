function rot13(str) {
  // LBH QVQ VG!
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let arr = str.toLowerCase().split("");
  let cipher = arr.map(char => {
    if ((char, /\W/.test(char))) {
      return char;
    }

    let index = alpha.indexOf(char) + 13;
    if (index > alpha.length - 1) {
      index -= alpha.length;
    }
    return alpha[index];
  });

  console.log(cipher.join("").toUpperCase());
  return cipher.join("").toUpperCase();
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
