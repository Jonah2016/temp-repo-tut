const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
	"./content/resul_sync.txt",
	`New file has been created now with merged values of  ${first} + ${second}`,
	{ flag: "a" }
);
