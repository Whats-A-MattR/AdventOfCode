const fs = require("fs");
const path = require("path");
const readline = require("readline");

async function runLogic(filename) {
  let elves = [];
  const fileStream = fs.createReadStream(path.resolve(filename));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let index = 0;

  total = 0;
  for await (const l of rl) {
    //console.log(total)
    if (l !== "") {
      //console.log(parseInt(l))
      total += parseInt(l);
    }
    if (l === "") {
      index++;
      elves.push(total);
      total = 0;
    }
  }
  let topThreeTotal = 0;
  let topThree = elves
    .sort((a, b) => b - a)
    .slice(0, 3)
    .map((x) => topThreeTotal += x);

  console.log(topThreeTotal);
  const outFile = fs.createWriteStream('js_out.txt')
  topThree.map(x => {
    outFile.write(`${x} \n`)
  })
  outFile.write(`total: ${topThreeTotal}`)
}

runLogic("input.txt");
