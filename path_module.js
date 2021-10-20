const path = require("path");

// console.log(path.sep);
// console.log(path.join());

// const filePath = path.join("/content/", "subfolder", "test.txt");
// console.log(filePath);

// const base_name = path.basename(filePath);
// console.log(base_name);

const absolutePath = path.resolve(
	__dirname,
	"content",
	"subfolder",
	"test.txt"
);
console.log(absolutePath);
