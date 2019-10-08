function pairElement(str) {
  let pairs = [["A", "T"], ["G", "C"]];
  let strands = str.split("");
  let DNA = [];

  strands.map(strand => {
    let set = [];
    pairs.map(
      pair =>
        (set =
          pair.indexOf(strand) > -1
            ? [
                strand,
                ...pair.filter(value => value !== pair[pair.indexOf(strand)])
              ]
            : set)
    );
    DNA.push(set);
  });
  console.log(DNA);
  return DNA;
}

console.clear();
pairElement("GCG");
pairElement("TTGAG");
pairElement("CTCTA");
