const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filename = "input.txt";

async function processLines(file) {
  let elves = [];
  console.log(file);
  console.log(path.resolve(file));
  const fileStream = fs.createReadStream(path.resolve(file));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let i = 0;

  for await (const l of rl) {
    if (l !== "") {
      elves[i] === undefined
        ? (elves[i] = parseInt(l))
        : (elves[i] += parseInt(l));
      continue;
    }
    i++;
  }
  return elves
}

function largestItem(arr) {
  let li = 0;
  for (let [k, v] of Object.entries(arr)) {
    if (v > li) {
      li = v;
    }
  }
  return li;
}

async function runLogic() {
  processLines(filename).then((x) => {
    console.log(largestItem(x));
  });
}

runLogic();