const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, res) => {
	if (err) {
		console.log(`Error! ${err}`);
		return;
	} else {
		console.log(res);
	}
});
