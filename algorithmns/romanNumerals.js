function convertToRoman(num) {
  let str = [];
  let set = Math.round(num)
    .toString()
    .split("");
  let lookup = [[1, 4, 5, 9], [10, 40, 50, 90], [100, 400, 500, 900], [1000]];
  let roman = [
    ["I", "IV", "V", "IX"],
    ["X", "XL", "L", "XC"],
    ["C", "CD", "D", "CM"],
    "M"
  ];

  set.reverse().map((num, index) => {
    let dec = value => Number(value + "0".repeat(index));
    let hold = [];

    num > 5 && num < 9 ? hold.push(dec(num - 5), dec(5)) : hold.push(dec(num));

    hold.map(number => {
      if (number === 0) {
        return str;
      }

      let character =
        lookup[index].indexOf(number) === -1
          ? roman[index][lookup[index].indexOf(dec(1))].repeat(
              number.toString()[0]
            )
          : roman[index][lookup[index].indexOf(number)];

      str.unshift(character);
      console.log(`Converts ${number} to ${character}`);

      return str;
    });
    return str;
  });

  console.log(str.join(""));
  return str.join("");
}

// convertToRoman(36);
convertToRoman(2014);
