function palindrome(str) {
  let arg = str
    .toLowerCase()
    .split("")
    .filter(char => char.match(/[a-z0-9]/));
  let isEven = arg.length % 2 === 0;
  let reverse = [];
  let count = 0;

  let middle = isEven
    ? Math.round(arg.length / 2)
    : Math.round(arg.length / 2) - 1;
  let left = isEven ? arg.slice(0, middle) : arg.slice(0, middle + 1);
  let right = isEven
    ? arg.slice(middle, arg.length)
    : arg.slice(middle, arg.length);

  right.map(char => reverse.unshift(char));
  left.map((char, index) => (left[index] === reverse[index] ? count++ : count));

  let isPalindrome = count === left.length;

  console.log(
    `Length: ${arg.length}, middle ${middle} char ${
      arg[middle]
    }, math: ${arg.length / 2}`
  );
  console.log(`Array to check: ${arg}`);
  console.log(`1st half: ${left}`);
  console.log(`2nd half: ${right}`);
  console.log(`Reversed: ${reverse}, Pal? ${isPalindrome}`);
  console.log(`_______________`);

  // Good luck!
  return isPalindrome;
}

palindrome("eye");
palindrome("0_0 (: /- :) 0-0");
palindrome("race car");
palindrome("My age is 0, 0 si ega ym.");

palindrome("nope");
palindrome("1 eye for of 1 eye.");
