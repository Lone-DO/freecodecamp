function checkCashRegister(price, cash, cid) {
  const payments = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ].reverse();
  const fixed = num => Number(num.toFixed(2));
  let system = { status: "OPEN", change: [] };
  let register = { total: 0, funds: [...cid] };
  let changeNeeded = cash !== price;
  let changeDue = cash - price;
  let change = [];

  // let registerTotal = 0;
  cid.map(set => (register.total += set[1]));
  register.total = fixed(register.total);

  let afterChange = fixed(register.total - changeDue);

  console.log(`
  Needs Change: ${changeNeeded}, 
  Change due: $${changeDue}, 
  Register total funds: $${register.total}
  `);

  const status = () => {
    if ((changeNeeded && changeDue > register.total) || changeDue > 0) {
      system.status = "INSUFFICIENT_FUNDS";
    } else if (afterChange === 0 || (changeDue > 0 && register.total === 0)) {
      system.status = "CLOSED";
      system.change = register.funds.reverse();
    } else {
      system.status = "OPEN";
      system.change = change;
    }
  };

  register.funds.reverse().map((set, int) => {
    let deduct = payments[int];
    let [name, value] = set;
    let hasChange =
      set[1] >= deduct.value && fixed(changeDue - deduct.value) > 0;
    let arr = { name: set[0], value: 0 };

    if (hasChange) {
      while (value > 0 && changeDue >= 0) {
        if (fixed(changeDue - deduct.value) >= 0) {
          value -= deduct.value;
          changeDue -= deduct.value;
          register.total -= deduct.value;
          arr.value += deduct.value;
        } else {
          break;
        }
      }

      value = fixed(value);
      changeDue = fixed(changeDue);
      register.total = fixed(register.total);
      arr.value = fixed(arr.value);
      change.push([arr.name, arr.value]);
    }
  });

  status();
  console.log(
    `Change Due: ${changeDue}, Total left in register: ${register.total}`
  );
  console.log(`Here is your change, ma'am`);
  console.log(system);
  // Here is your change, ma'am.
  return system;
}
console.clear();
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return "INSUFFICIENT"

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return "Closed"

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
