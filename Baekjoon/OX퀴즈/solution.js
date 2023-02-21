const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

const inputDataArray = inputData.slice(1);

const newInputDataArray = inputDataArray.map((v) => {
  const valueArray = v.split("");

  let acc = 0;
  let store = 0;
  let result = 0;
  valueArray.forEach((v, i) => {
    if (v === "O" && i === valueArray.length - 1) {
      acc++;
      store += acc;
      result += store;
    }

    if (v === "O") {
      acc++;
      store += acc;
    } else {
      result += store;
      acc = 0;
      store = 0;
    }
  });

  return result;
});

newInputDataArray.forEach((v) => console.log(v));
